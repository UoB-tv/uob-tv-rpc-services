package tv.uob.hls_cluster_controller;

import com.hubspot.jinjava.Jinjava;
import io.fabric8.kubernetes.api.model.IntOrString;
import io.fabric8.kubernetes.api.model.Service;
import io.fabric8.kubernetes.api.model.ServiceBuilder;
import io.fabric8.kubernetes.api.model.ServicePortBuilder;
import io.fabric8.kubernetes.api.model.apps.Deployment;
import io.fabric8.kubernetes.api.model.apps.DoneableDeployment;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClientException;
import io.fabric8.kubernetes.client.Watcher;
import io.fabric8.kubernetes.client.dsl.ScalableResource;
import me.snowdrop.istio.api.IstioResource;
import me.snowdrop.istio.api.networking.v1alpha3.*;
import me.snowdrop.istio.client.IstioClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sun.reflect.annotation.ExceptionProxy;
import tv.uob.hls_cluster_controller.api.HlsStream;
import tv.uob.hls_cluster_controller.api.HlsStreamSpec;
import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

public class HlsStreamWatcher implements Watcher<HlsStream> {
    private static final Logger logger = LoggerFactory.getLogger(HlsStreamWatcher.class.getName());
    private final KubernetesClient client;
    private final IstioClient istioClient;
    private final String appName;
    private final Jinjava jinja;
    private final String template;
    private final String ffmpegImage;
    private final String nginxImage;
    private final String playbackDomain = "live-playback.uob-tv.co.uk";
    private final String gateway = "uob-tv-hls-playback-gateway";
    public HlsStreamWatcher(KubernetesClient client, IstioClient istioClient, String appName, Jinjava jinja, String template, String ffmpegImage, String nginxImage) {
        this.client = client;
        this.istioClient = istioClient;
        this.jinja = jinja;
        this.appName = appName;
        this.template = template;
        this.ffmpegImage = ffmpegImage;
        this.nginxImage = nginxImage;
    }

    public boolean hasDeployment(String namespace, String deploymentName) {
        try{
            Deployment dep = client.apps().deployments()
                    .inNamespace(namespace)
                    .withName(deploymentName)
                    .get();
            return dep != null;
        }catch(Exception e) {
            return false;
        }
    }
    private String deploymentName(String appName, String streamKey) {
        return appName + "-" + streamKey;
    }

    @Override
    public void eventReceived(Action action, HlsStream resource) {
        try {
            logger.info("==> " + action + " for " + resource);
            String streamKey = resource.getSpec().getStreamKey();
            String channelId = resource.getSpec().getChannelId();
            String namespace = resource.getMetadata().getNamespace();
            String deploymentName = deploymentName(appName, streamKey);
            String serviceName = serviceName(streamKey);
            String virtualServiceName = virtualServiceName(streamKey);
            if (streamKey == null) {
                logger.warn("receiving stream key null");
                return;
            }
            logger.info("deploymentName: " + deploymentName);
            logger.info("namespace " + namespace);
            switch (action) {
                case ADDED: {
                    Deployment dep = buildHlsStreamerDeployment(resource, client);
                    Service hlsService = buildKubernetesService(namespace, streamKey, appName);
                    VirtualService vs = buildIstioVirtualService(hlsService, streamKey, namespace, channelId);
                    if (hasDeployment(namespace, deploymentName)) {
                        logger.info("patching deployment " + deploymentName);
                        try {
                            client.apps().deployments()
                                    .inNamespace(namespace)
                                    .withName(deploymentName)
                                    .cascading(true)
                                    .patch(dep);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not patch deployment " + e.getMessage());
                        }
                        logger.info("patching service " + serviceName);
                        try {
                            client.services()
                                    .inNamespace(namespace)
                                    .withName(serviceName)
                                    .cascading(true)
                                    .patch(hlsService);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not patch service " + e.getMessage());
                        }
                        logger.info("patching virtual service " + virtualServiceName);
                        try {
                            istioClient.virtualService()
                                    .inNamespace(namespace)
                                    .withName(virtualServiceName)
                                    .cascading(true)
                                    .patch(vs);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not patch virtual service " + e.getMessage());
                        }
                    } else {
                        logger.info("creating deployment " + deploymentName);
                        try {
                            client.apps().deployments()
                                    .inNamespace(namespace)
                                    .createOrReplace(dep);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not create deployment " + e.getMessage());
                        }
                        logger.info("creating service " + serviceName);
                        try {
                            client.services()
                                    .inNamespace(namespace)
                                    .createOrReplace(hlsService);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not create service " + e.getMessage());
                        }
                        logger.info("creating virtual service " + virtualServiceName);
                        try {
                            istioClient.virtualService()
                                    .inNamespace(namespace)
                                    .createOrReplace(vs);
                        } catch(KubernetesClientException e) {
                            logger.warn("could not create virtual service " + e.getMessage());
                        }
                    }
                    break;
                }
                case DELETED:
                    logger.info("deleting deployment " + deploymentName);
                    try {
                        boolean deleted = client.apps()
                                .deployments()
                                .inNamespace(namespace)
                                .withName(deploymentName)
                                .delete();
                        if (deleted) {
                            logger.info("successfully delete deployment " + deploymentName);
                        } else {
                            logger.warn("failed to delete deployment " + deploymentName);
                        }
                    } catch(KubernetesClientException e) {
                        logger.error("error deleting deployment " + deploymentName);
                        logger.error(e.getMessage());
                        logger.trace("", e);
                    }
                    logger.info("deleting service " + serviceName);
                    try {
                        boolean deleted = client
                                .services()
                                .inNamespace(namespace)
                                .withName(serviceName)
                                .delete();
                        if (deleted) {
                            logger.info("successfully delete service " + serviceName);
                        } else {
                            logger.warn("failed to delete service " + serviceName);
                        }
                    } catch(KubernetesClientException e) {
                        logger.error("error deleting service " + serviceName);
                        logger.error(e.getMessage());
                        logger.trace("", e);
                    }
                    logger.info("delete virtual service " + virtualServiceName);
                    try {
                        boolean deleted = istioClient
                                .virtualService()
                                .inNamespace(namespace)
                                .withName(virtualServiceName)
                                .delete();
                        if (deleted) {
                            logger.info("successfully delete virtual service " + virtualServiceName);
                        } else {
                            logger.warn("failed to delete virtual service " + virtualServiceName);
                        }
                    } catch(KubernetesClientException e) {
                        logger.error("error deleting service " + serviceName);
                        logger.error(e.getMessage());
                        logger.trace("", e);
                    }
                    break;
                case ERROR:
                    break;
                case MODIFIED: {
                    Deployment dep = buildHlsStreamerDeployment(resource, client);
                    Service hlsService = buildKubernetesService(namespace, streamKey, appName);
                    VirtualService vs = buildIstioVirtualService(hlsService, streamKey, namespace, channelId);
                    logger.info("creating deployment " + deploymentName);
                    try {
                        client.apps().deployments()
                                .inNamespace(namespace)
                                .withName(deploymentName)
                                .cascading(true)
                                .patch(dep);
                    } catch(KubernetesClientException e) {
                        logger.warn("could not patch deployment " + e.getMessage());
                    }
                    logger.info("creating service " + serviceName);
                    try {
                        client.services()
                                .inNamespace(namespace)
                                .withName(serviceName)
                                .cascading(true)
                                .patch(hlsService);
                    } catch(KubernetesClientException e) {
                        logger.warn("could not patch service " + e.getMessage());
                    }
                    logger.info("creating virtual service " + virtualServiceName);
                    try {
                        istioClient.virtualService()
                                .inNamespace(namespace)
                                .withName(virtualServiceName)
                                .cascading(true)
                                .patch(vs);
                    } catch(KubernetesClientException e) {
                        logger.warn("could not patch virtual service " + e.getMessage());
                    }
                    break;
                }
                default:
                    break;
            }
        } catch (Exception e) {
            logger.error("error handling events");
            logger.error(e.getMessage());
            logger.error("Action " + action);
            logger.error("Resource " + resource);
            e.printStackTrace();
        }
    }

    @Override
    public void onClose(KubernetesClientException e) {
        logger.error("error when closing watcher");
        logger.error(e.getMessage());
        logger.error(e.getStatus().toString());
    }


    private Deployment buildHlsStreamerDeployment(HlsStream stream, KubernetesClient client) {
        HlsStreamSpec spec = stream.getSpec();
        int port = 1935;
        String host = spec.getIp();
        if (spec.getPort() != null) {
            port = spec.getPort();
        }

        String rtmpHost = String.format("rtmp://%s:%d", host, port);
        String streamKey = spec.getStreamKey();
        String channelId = spec.getChannelId();
        String namespace = stream.getMetadata().getNamespace();
        if (namespace == null) {
            namespace = "default";
        }

        Map<String, Object> variables = new HashMap<>();
        variables.put("appName", appName);
        variables.put("streamKey", streamKey);
        variables.put("rtmpUrl", rtmpHost);
        variables.put("channelId", channelId);
        variables.put("ffmpegImage", ffmpegImage);
        variables.put("nginxImage", nginxImage);
        variables.put("namespace", namespace);

        String deploymentTemplate = jinja.render(template, variables);
        ScalableResource<Deployment, DoneableDeployment> resource = client.apps().deployments().load(new ByteArrayInputStream(deploymentTemplate.getBytes()));
        return resource.get();
    }

    private String serviceName(String streamKey) {
        return "hls-streamer-service-" + streamKey;
    }

    private String virtualServiceName(String streamKey) {
        return "hls-stream-"+streamKey + "-route";
    }

    private Service buildKubernetesService(String namespace, String streamKey, String appName) {
        return new ServiceBuilder()
                .withNewMetadata()
                    .withName(serviceName(streamKey))
                    .withNamespace(namespace)
                    .addToLabels("app", appName)
                    .addToLabels("stream-key", streamKey)
                    .addToLabels("managedby","hls-cluster-controller")
                .endMetadata()
                .withNewSpec()
                    .addToSelector("app", appName)
                    .addToSelector("stream-key", streamKey)
                    .withType("ClusterIP")
                    .withPorts(
                        new ServicePortBuilder()
                                .withName("http")
                                .withPort(8080)
                                .withTargetPort(new IntOrString(8080))
                                .build()
                    )
                .endSpec()
                .build();
    }

    private VirtualService buildIstioVirtualService(Service kubeService, String streamKey, String namespace, String channelId) {
        String hostName = kubeService.getMetadata().getName();
        String virtualServiceName = virtualServiceName(streamKey);
        return new VirtualServiceBuilder()
                .withNewMetadata()
                    .withName(virtualServiceName)
                    .withNamespace(namespace)
                    .addToLabels("app", appName)
                    .addToLabels("stream-key", streamKey)
                    .addToLabels("managedby","hls-cluster-controller")
                .endMetadata()
                .withNewSpec()
                    .withHosts(playbackDomain)
                    .withGateways(gateway)
                    .addNewHttp()
                        .addNewMatch()
                            .withNewUri()
                            .withNewPrefixMatchType("/" + channelId)
                            .endUri()
                        .endMatch()
                        .addNewRoute()
                            .withNewDestination()
                                .withHost(hostName)
                                .withNewPort()
                                    .withNewNumberPort(8080)
                                .endPort()
                            .endDestination()
                        .endRoute()
                        .withNewRewrite()
                            .withUri("/")
                        .endRewrite()
                    .endHttp()
                .endSpec()
                .build();
    }
}
