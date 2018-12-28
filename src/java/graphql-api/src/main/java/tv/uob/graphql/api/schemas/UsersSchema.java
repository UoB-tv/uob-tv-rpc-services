package tv.uob.graphql.api.schemas;

import com.google.api.graphql.rejoiner.Mutation;
import com.google.api.graphql.rejoiner.Query;
import com.google.api.graphql.rejoiner.RelayNode;
import com.google.api.graphql.rejoiner.SchemaModule;
import com.google.common.util.concurrent.ListenableFuture;
import tv.uob.grpc.*;


public final class UsersSchema extends SchemaModule {

    @Query("getUserByEmail")
    ListenableFuture<User> getUserByEmail(GetUserByEmailRequest request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.getByEmail(request);
    }

    @Query("getUserById")
    ListenableFuture<User> getUserById(GetUserByIdRequest request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.getById(request);
    }

    @Query("getUserByUsername")
    ListenableFuture<User> getUserByUsername(GetUserByUsernameRequest request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.getByUsername(request);
    }

    @Mutation("createUser")
    ListenableFuture<CreateUserResponse> createUser(CreateUserRequest request, UserServiceGrpc.UserServiceFutureStub client) {
        return client.createUser(request);
    }
}
