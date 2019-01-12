package tv.uob.hls_cluster_controller.api;

import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.fabric8.kubernetes.api.model.KubernetesResource;
import io.fabric8.kubernetes.internal.KubernetesDeserializer;

@JsonDeserialize(
        using = JsonDeserializer.None.class
)
public class HlsStreamSpec implements KubernetesResource {
    private String rtmpService;
    private String streamKey;
    private Integer port;
    private String ip;

    public HlsStreamSpec() {
    }

    @Override
    public String toString() {
        return "HlsStreamSpec{" +
                "rtmpService='" + rtmpService + '\'' +
                ", streamKey='" + streamKey + '\'' +
                ", port=" + port +
                ", ip='" + ip + '\'' +
                ", channelId='" + channelId + '\'' +
                '}';
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    private String channelId;

    public Integer getPort() {
        return port;
    }

    public void setPort(Integer port) {
        this.port = port;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getRtmpService() {
        return rtmpService;
    }

    public void setRtmpService(String rtmpService) {
        this.rtmpService = rtmpService;
    }

    public String getStreamKey() {
        return streamKey;
    }

    public void setStreamKey(String streamKey) {
        this.streamKey = streamKey;
    }

}
