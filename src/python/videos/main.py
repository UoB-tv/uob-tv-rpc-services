import users_pb2_grpc
import health_check_pb2_grpc

from videos.service.servicer import VideoService, HealthCheck

import time
import os
import logging
import grpc
from concurrent import futures

logger = logging.getLogger(__name__)

GRPC_PORT = os.getenv("GRPC_PORT", default=6000)
_ONE_DAY_IN_SECONDS = 60 * 60 * 24

def main():
    logger.info("initializing server")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    users_pb2_grpc.add_UserServiceServicer_to_server(VideoService(), server)
    health_check_pb2_grpc.add_HealthServicer_to_server(HealthCheck(), server)

    server.add_insecure_port('[::]:{}'.format(GRPC_PORT))
    server.start()
    
    logger.info("users server listening on: %s" % GRPC_PORT)

    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    main()