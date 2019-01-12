package tv.uob.hls_cluster_service;

import io.grpc.Server;
import io.grpc.ServerBuilder;


import java.io.IOException;
import java.util.logging.Logger;

public class HlsClusterGrpcServer {

    private static int GRPC_PORT;
    private final static Logger logger = Logger.getLogger(HlsClusterGrpcServer.class.getName());
    static {
        String grpcPort = System.getenv("GRPC_PORT");
        if(grpcPort == null || grpcPort.isEmpty()) {
            grpcPort = "6000";
        }
        GRPC_PORT = Integer.parseInt(grpcPort);
    }
    public static void main(String[] args) {

        try {


            Server server = ServerBuilder
                    .forPort(GRPC_PORT)
                    .addService(new HlsClusterService())
                    .build();
            logger.info("starting grpc server");
            server.start();
            logger.info("HlsClusterApiServer started on port " + GRPC_PORT);
            server.awaitTermination();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
