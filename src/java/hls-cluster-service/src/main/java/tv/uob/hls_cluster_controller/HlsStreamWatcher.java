package tv.uob.hls_cluster_controller;

import com.hubspot.jinjava.Jinjava;
import io.fabric8.kubernetes.api.model.apps.Deployment;
import io.fabric8.kubernetes.api.model.apps.DoneableDeployment;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClientException;
import io.fabric8.kubernetes.client.Watcher;
import io.fabric8.kubernetes.client.dsl.ScalableResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import tv.uob.hls_cluster_controller.api.HlsStream;
import tv.uob.hls_cluster_controller.api.HlsStreamSpec;

import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

public class HlsStreamWatcher implements Watcher<HlsStream> {
    private static final Logger logger = LoggerFactory.getLogger(HlsStreamWatcher.class.getName());

    private final KubernetesClient client;
    private final String appName;
    private final Jinjava jinja;
    private final String template;
    private final String ffmpegImage;
    private final String nginxImage;

    public HlsStreamWatcher(KubernetesClient client, String appName, Jinjava jinja, String template, String ffmpegImage, String nginxImage) {
        this.client = client;
        this.jinja = jinja;
        this.appName = appName;
        this.template = template;
        this.ffmpegImage = ffmpegImage;
        this.nginxImage = nginxImage;
    }

    @Override
    public void eventReceived(Action action, HlsStream resource) {
        try {
            System.out.println("==> " + action + " for " + resource);
            String streamKey = resource.getSpec().getStreamKey();
            String namespace = resource.getMetadata().getNamespace();
            String deploymentName = appName + "-" + streamKey;
            if (streamKey == null) {
                logger.warn("receiving stream key null");
                return;
            }
            logger.info("deploymentName: " + deploymentName);
            logger.info("namespace " + namespace);
            switch (action) {
                case ADDED:
                    Deployment dep = buildHlsStreamerDeployment(resource, client);
                    client.apps().deployments()
                            .createOrReplace(dep);
                    break;
                case DELETED:
                    logger.info("deleting deployment " + deploymentName);
                    boolean deleted = client.apps()
                            .deployments()
                            .inNamespace(namespace)
                            .withName(deploymentName)
                            .delete();
                    if(deleted) {
                        logger.info("successfully delete deployment " + deploymentName);
                    } else {
                        logger.warn("failed to delete deployment " + deploymentName);
                    }
                    break;
                case ERROR:
                    break;
                case MODIFIED:
                    Deployment updatedDep = buildHlsStreamerDeployment(resource, client);
                    client.apps()
                            .deployments()
                            .createOrReplace(updatedDep);
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
}
