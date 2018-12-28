import hello_pb2_grpc
import hello_pb2
import health_check_pb2_grpc
import health_check_pb2

import opentracing.tracer
from grpc_opentracing import open_tracing_server_interceptor
from grpc_opentracing.grpcext import intercept_server

from hello_world.service.greeter import Greeter

import os
import time
import grpc
from concurrent import futures

_ONE_DAY_IN_SECONDS = 60 * 60 * 24

GRPC_PORT = os.getenv("GRPC_PORT", default=6000)

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )


def serve():
    tracer = opentracing.tracer
    interceptor = open_tracing_server_interceptor(tracer)
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    server = intercept_server(server, interceptor)

    hello_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    health_check_pb2_grpc.add_HealthServicer_to_server(HealthCheck(), server)

    server.add_insecure_port('[::]:{}'.format(GRPC_PORT))
    server.start()
    print("server listening on ", GRPC_PORT)

    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    serve()
