import streams_pb2
import streams_pb2_grpc

import health_check_pb2_grpc
import health_check_pb2

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )

class StreamsServicer(streams_pb2_grpc.StreamServiceServicer):
    def __init__(self):
        pass
