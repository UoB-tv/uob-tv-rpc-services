package tv.uob.graphql.api.schemas;

import com.google.inject.AbstractModule;

public class SchemaModule extends AbstractModule {
    @Override
    protected void configure() {
        install(new UsersSchema());
    }
}
