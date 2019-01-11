package tv.uob.graphql.api.clients;

import com.google.inject.AbstractModule;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import tv.uob.grpc.users.UserServiceGrpc;

public class UsersClient extends AbstractModule {
    private static final String host;
    private static final int port;
    private static final String serviceDomain;

    static {
        if(System.getenv("SERVICES_DOMAIN") == null) {
            serviceDomain = "";
        } else {
            serviceDomain = "." + System.getenv("SERVICES_DOMAIN");
        }
        host = "users-service" + serviceDomain;
        if(System.getenv("GRPC_PORT") == null) {
            port = 6000;
        } else {
            port = Integer.parseInt(System.getenv("GRPC_PORT"));
        }
    }

    @Override
    protected void configure() {
        ManagedChannel channel = ManagedChannelBuilder
                .forAddress(host, 6000)
                .usePlaintext(true)
                .build();

        bind(UserServiceGrpc.UserServiceFutureStub.class)
                .toInstance(UserServiceGrpc.newFutureStub(channel));

        bind(UserServiceGrpc.UserServiceBlockingStub.class)
                .toInstance(UserServiceGrpc.newBlockingStub(channel));
    }
}
