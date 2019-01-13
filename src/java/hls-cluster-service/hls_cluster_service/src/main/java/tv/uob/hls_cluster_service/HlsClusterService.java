package tv.uob.hls_cluster_service;

import io.grpc.stub.StreamObserver;
import tv.uob.grpc.hlscluster.*;

public class HlsClusterService extends HlsClusterGrpc.HlsClusterImplBase {

    public HlsClusterService() {

    }
    @Override
    public void setupStream(StreamId request, StreamObserver<RpcResult> responseObserver) {

        RpcResult result = RpcResult.newBuilder()
                .setSuccess(true)
                .setError("")
                .build();
        responseObserver.onNext(result);
        responseObserver.onCompleted();
    }

    private RpcResult successResult() {
        RpcResult result = RpcResult.newBuilder()
                .setSuccess(true)
                .setError("")
                .build();
        return result;
    }
    @Override
    public void provisionTranmuxer(TransmuxerParameters request, StreamObserver<RpcResult> responseObserver) {
        responseObserver.onNext(successResult());
        responseObserver.onCompleted();
    }

    @Override
    public void unprovisionTranmuxer(StreamKey request, StreamObserver<RpcResult> responseObserver) {
        responseObserver.onNext(successResult());
        responseObserver.onCompleted();
    }
    @Override
    public void addChannelRoute(AddRouterRecord request, StreamObserver<RpcResult> responseObserver) {
        responseObserver.onNext(successResult());
        responseObserver.onCompleted();
    }
}
