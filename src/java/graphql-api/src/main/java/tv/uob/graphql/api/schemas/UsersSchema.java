package tv.uob.graphql.api.schemas;

import com.google.api.graphql.rejoiner.Query;
import com.google.api.graphql.rejoiner.SchemaModule;
import com.google.common.util.concurrent.ListenableFuture;
import tv.uob.grpc.UserId;
import tv.uob.grpc.users.Email;
import tv.uob.grpc.users.User;
import tv.uob.grpc.users.UserServiceGrpc;


public final class UsersSchema extends SchemaModule {

    @Query("getUserByEmail")
    ListenableFuture<User> getUserByEmail(Email request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.getUserByEmail(request);
    }

    @Query("getUserById")
    ListenableFuture<User> getUserById(UserId request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.getUserById(request);
    }
}
