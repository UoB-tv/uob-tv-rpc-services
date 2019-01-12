package tv.uob.hls_cluster_controller.api;

import io.fabric8.kubernetes.client.CustomResource;

public class HlsStream extends CustomResource {


    private HlsStreamSpec spec;

    public HlsStream() {

    }
    public HlsStreamSpec getSpec() {
        return spec;
    }

    public void setSpec(HlsStreamSpec spec) {
        this.spec = spec;
    }

    @Override
    public String toString() {
        return "HlsStream{" +
                "apiVersion='" + getApiVersion() + '\'' +
                ", metadata=" + getMetadata() +
                ", spec=" + spec +
                '}';
    }
}
