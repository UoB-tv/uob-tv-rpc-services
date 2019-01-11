package tv.uob.graphql.api.server;

import com.google.api.graphql.rejoiner.SchemaProviderModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceFilter;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.eclipse.jetty.util.resource.PathResource;
import tv.uob.graphql.api.clients.ClientModule;
import tv.uob.graphql.api.schemas.SchemaModule;

import javax.inject.Singleton;
import java.io.File;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import static javax.servlet.DispatcherType.ASYNC;
import static javax.servlet.DispatcherType.REQUEST;
import static org.eclipse.jetty.servlet.ServletContextHandler.SESSIONS;

public class GraphQLServer {

    private static final int HTTP_PORT = 8080;
    private static final Logger logger = Logger.getLogger(GraphQLServer.class.getName());

    public static void main(String[] args) throws Exception {
        Server server = new Server(HTTP_PORT);

        ServletContextHandler context = new ServletContextHandler(server, "/", SESSIONS);

        context.addEventListener(
                new GuiceServletContextListener() {
                    @Override
                    protected Injector getInjector() {
                        return Guice.createInjector(
                                new ServletModule() {
                                    @Override
                                    protected void configureServlets() {
                                        Map<String, String> corsParams = new HashMap<>();
                                        corsParams.put("allowedOrigins", "*");
                                        corsParams.put("allowCredentials","true");
                                        corsParams.put("allowedMethods","GET,POST,OPTIONS,DELETE,HEAD");

                                        bind(CrossOriginFilter.class).in(Singleton.class);
                                        serve("/graphql").with(GraphQLServlet.class);
                                        filter("/graphql").through(CrossOriginFilter.class, corsParams);
                                        filter("/graphql").through(JwtAuthenticationFilter.class);
                                    }
                                },
                                new DataLoaderModule(),
                                new SchemaProviderModule(), // Part of Rejoiner framework (Provides `@Schema
                                // GraphQLSchema`)
                                new ClientModule(), // Installs all of the client modules
                                new SchemaModule() // Installs all of the schema modules
                        );
                    }
                });

        context.addFilter(GuiceFilter.class, "/*", EnumSet.of(REQUEST, ASYNC));
        context.addServlet(DefaultServlet.class, "/");
        server.start();
        logger.info("Server running on port " + HTTP_PORT);
        server.join();
    }
}