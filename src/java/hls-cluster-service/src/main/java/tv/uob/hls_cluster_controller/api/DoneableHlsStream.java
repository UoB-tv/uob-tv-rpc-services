package tv.uob.hls_cluster_controller.api;

import io.fabric8.kubernetes.api.builder.Function;
import io.fabric8.kubernetes.client.CustomResourceDoneable;

public class DoneableHlsStream extends CustomResourceDoneable<HlsStream> {

    public DoneableHlsStream(HlsStream resource, Function<HlsStream, HlsStream> function) {
        super(resource, function);
    }
}
