import videos_pb2
import videos_pb2_grpc
import health_check_pb2
import health_check_pb2_grpc

import logging
import os
import sys

from google.cloud import datastore

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger(__name__)

GOOGLE_APPLICATION_CREDENTIALS = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", None)

if GOOGLE_APPLICATION_CREDENTIALS is None:
    logger.error("Environment variable GOOGLE_APPLICATION_CREDENTIALS is required")
    exit(-1)

KIND = "User"

class VideoService(videos_pb2_grpc.VideoServiceServicer):
    def __init__(self):
        self.datastore_client = datastore.Client.from_service_account_json(GOOGLE_APPLICATION_CREDENTIALS)
    
    def GetVideoById(self, request, context):
        pass
    

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )
        