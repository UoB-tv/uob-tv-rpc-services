package tv.uob.hls_cluster_controller;

import com.google.common.base.Charsets;
import com.google.common.io.Resources;
import com.hubspot.jinjava.Jinjava;
import io.fabric8.kubernetes.api.model.apiextensions.CustomResourceDefinition;
import io.fabric8.kubernetes.api.model.apiextensions.CustomResourceDefinitionBuilder;
import io.fabric8.kubernetes.api.model.apiextensions.CustomResourceDefinitionNamesBuilder;
import io.fabric8.kubernetes.api.model.apiextensions.CustomResourceDefinitionVersionBuilder;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.dsl.MixedOperation;
import io.fabric8.kubernetes.client.dsl.NonNamespaceOperation;
import io.fabric8.kubernetes.client.dsl.Resource;
import io.fabric8.kubernetes.internal.KubernetesDeserializer;
import java.io.IOException;
import java.util.Arrays;
import me.snowdrop.istio.client.DefaultIstioClient;
import me.snowdrop.istio.client.IstioClient;
import org.slf4j.LoggerFactory;
import tv.uob.hls_cluster_controller.api.DoneableHlsStream;
import tv.uob.hls_cluster_controller.api.HlsStream;
import tv.uob.hls_cluster_controller.api.HlsStreamList;

public class Main {
    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(Main.class.getName());

    private static String ffmpegImage = "eu.gcr.io/uob-tv-project-dev/uob-tv-ffmpeg:1-3";
    private static String nginxImage = "eu.gcr.io/uob-tv-project-dev/nginx:1-6";

    private static String template = "";
    private static Jinjava jinja = new Jinjava();
    private static String appName = "hls-streamer";

    private static String CRD_GROUP = "k8s.uob.tv";
    private static String CRD_NAME = "hlsstreams.k8s.uob.tv";
    private static volatile boolean shouldWatch = true;
    static {
        try {
            template = Resources.toString(Resources.getResource("hls-streamer-template.yaml"), Charsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static CustomResourceDefinition buildHlsStreamCRD() {
        return new CustomResourceDefinitionBuilder()
                .withApiVersion("apiextensions.k8s.io/v1beta1")
                .withNewMetadata()
                .withName(CRD_NAME)
                .endMetadata()
                .withNewSpec()
                .withGroup(CRD_GROUP)
                .withScope("Namespaced")
                .withVersions(
                        new CustomResourceDefinitionVersionBuilder().withName("v1").withServed(true).withStorage(true).build())
                .withNames(
                        new CustomResourceDefinitionNamesBuilder()
                                .withPlural("hlsstreams")
                                .withSingular("hlsstream")
                                .withKind("HlsStream")
                                .addAllToShortNames(Arrays.asList("hls"))
                                .build()
                )
                .endSpec()
                .build();
    }

    public static void main(String[] args) {
        Config config = new ConfigBuilder()
                .build();

        String namespace = null;
        try (final KubernetesClient client = new DefaultKubernetesClient(config)) {
            IstioClient istioClient = new DefaultIstioClient(client.getConfiguration());
            namespace = client.getNamespace();
            logger.info("client running in namespace: " +namespace);

            if(namespace != "video-proc-streaming") {
                namespace = "video-proc-streaming";
                logger.info("forcing namespace to be " + namespace);
            }
            CustomResourceDefinition hlsStreamCRD = null;

            //hlsStreamCRD = client.customResourceDefinitions().withName(CRD_NAME).get();
            hlsStreamCRD = buildHlsStreamCRD();
            KubernetesDeserializer.registerCustomKind(
                    "k8s.uob.tv/v1", "HlsStream", HlsStream.class
            );

            NonNamespaceOperation<HlsStream, HlsStreamList, DoneableHlsStream, Resource<HlsStream, DoneableHlsStream>>
                    hlsStreamsClient = client
                    .customResources(
                            hlsStreamCRD,
                            HlsStream.class,
                            HlsStreamList.class,
                            DoneableHlsStream.class
                    );

            hlsStreamsClient = ((MixedOperation<HlsStream, HlsStreamList, DoneableHlsStream, Resource<HlsStream,DoneableHlsStream>>) hlsStreamsClient).inNamespace(namespace);

            //CustomResourceList<HlsStream> dummyList = hlsStreamsClient.list();
            //List<HlsStream> items = dummyList.getItems();
            //System.out.println("  found " + items.size() + " hls-streamers");
            // reconciliate on startup.

            HlsStreamWatcher watcher = new HlsStreamWatcher(
                    ((DefaultKubernetesClient) client).inNamespace(namespace),
                    istioClient,
                    appName,
                    jinja,
                    template,
                    ffmpegImage,
                    nginxImage
            );

            while(true) {
                try (
                    Watch watch = hlsStreamsClient
                            .withResourceVersion(hlsStreamCRD.getMetadata().getResourceVersion())
                            .watch(watcher)
                ){

                    while(shouldWatch) {
                        System.in.read();
                        logger.info("continued from wait for key.");
                        try {
                            Thread.sleep(5000);
                        } catch(InterruptedException e) {
                            logger.info("sleep interrupted");
                        }
                    }
                } catch (Exception e) {
                    logger.error("Error when watching resources");
                    logger.trace(e.getMessage(), e);
                    e.printStackTrace();
                }
                logger.info("watcher stopped, sleeping before trying again");
                try {
                    Thread.sleep(5000);
                } catch(InterruptedException e) {
                    logger.info("sleep interrupted");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);

            Throwable[] suppressed = e.getSuppressed();
            if (suppressed != null) {
                for (Throwable t : suppressed) {
                    logger.error(t.getMessage(), t);
                }
            }
        }
    }

}