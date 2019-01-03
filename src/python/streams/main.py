from streams.service.servicer import StreamsServicer, HealthCheck

import streams_pb2_grpc
import health_check_pb2_grpc

import time
import os
import logging
import grpc
import sys
from concurrent import futures
from google.cloud import datastore

logging.basicConfig(stream=sys.stdout,level=logging.INFO)
logger = logging.getLogger(__name__)

GRPC_PORT = os.getenv("GRPC_PORT", default=6000)
_ONE_DAY_IN_SECONDS = 60 * 60 * 24

GOOGLE_APPLICATION_CREDENTIALS = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", None)

if not GOOGLE_APPLICATION_CREDENTIALS:
    logger.error("GOOGLE_APPLICATION_CREDENTIALS environment variable is required.")
    exit(-1)

def create_datastore_client():
    return datastore.Client.from_service_account_json(GOOGLE_APPLICATION_CREDENTIALS)


def main():
    logger.info("initializing server")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    streams_pb2_grpc.add_StreamServiceServicer_to_server(StreamsServicer(create_datastore_client, logger), server)
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
