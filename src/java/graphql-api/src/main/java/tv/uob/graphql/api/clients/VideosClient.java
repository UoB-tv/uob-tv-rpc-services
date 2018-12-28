package tv.uob.graphql.api.clients;

import com.google.inject.AbstractModule;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import tv.uob.grpc.UserServiceGrpc;
import tv.uob.grpc.VideoServiceGrpc;

public class VideosClient extends AbstractModule {

    @Override
    protected void configure() {
        ManagedChannel channel = ManagedChannelBuilder
                .forAddress("videos", 6000)
                .usePlaintext(true)
                .build();

        bind(VideoServiceGrpc.VideoServiceFutureStub.class)
                .toInstance(VideoServiceGrpc.newFutureStub(channel));

        bind(VideoServiceGrpc.VideoServiceBlockingStub.class)
                .toInstance(VideoServiceGrpc.newBlockingStub(channel));
    }
}
