package tv.uob.graphql.api.clients;

import com.google.inject.AbstractModule;

public class ClientModule extends AbstractModule {
    @Override
    protected void configure() {
        install(new UsersClient());
        install(new VideosClient());
    }
}
