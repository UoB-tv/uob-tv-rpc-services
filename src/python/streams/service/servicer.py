import streams_pb2
import streams_pb2_grpc
import health_check_pb2_grpc
import health_check_pb2

import grpc
import traceback
from google.cloud import datastore

import uuid
import base64

ENTITY_KIND = "Stream"

def random_stream_key():
    return base64.urlsafe_b64encode(uuid.uuid1().bytes).decode('utf8').rstrip('=\n')

def map_entity_to_stream(stream_entity, stream):
    stream.id = stream_entity.id or 0
    stream.userId = stream_entity["userId"]
    stream.streamKey = stream_entity["streamKey"]
    stream.description = stream_entity["description"]
    stream.title = stream_entity["title"]

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )

class StreamsServicer(streams_pb2_grpc.StreamServiceServicer):
    def __init__(self, datastore_client_factory, logger):
        self.datastore_client = datastore_client_factory()
        self.logger = logger

    def AuthenStreamToPublish(self, request, context):
        response = streams_pb2.StreamAuthenResult()
        query = self.datastore_client.query(kind=ENTITY_KIND)
        query.add_filter("streamKey", "=", request.value)
        try:
            result = list(query.fetch(limit=1))
            if len(result) < 1:
                response.authenticated = False
                response.message = "stream does not exist with streamKey"
            else:
                response.authenticated = True
                response.message = "Authentication successful."
        except Exception as e:
            response.authenticated = False
            response.message = str(e)
            self.logger.error(str(e))
        return response
    
    def GetStreamForUser(self, request, context):
        response = streams_pb2.Stream()
        
        query = self.datastore_client.query(kind=ENTITY_KIND)
        query.add_filter("userId", "=", request.value)
        
        try:
            result = list(query.fetch(limit=1))
            if len(result) < 1:
                context.set_code(grpc.StatusCode.NOT_FOUND)
            else:
                stream_entity = result[0]
                map_entity_to_stream(stream_entity, response)
        except Exception as e:
            context.set_code(grpc.StatusCode.UNAVAILABLE)
            context.set_details(str(e))
            self.logger.error(str(e))
        return response

    def GetStreamById(self, request, context):
        response = streams_pb2.Stream()
        self.logger.info("GetStreamById, request: %s" % request)
        if not request.value:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            return response
        try:
            key = self.datastore_client.key(ENTITY_KIND, request.value)
            stream_entity = self.datastore_client.get(key)
            if stream_entity is None:
                context.set_code(grpc.StatusCode.NOT_FOUND)
            else:
                map_entity_to_stream(stream_entity, response)
        except Exception as e:
            context.set_code(grpc.StatusCode.UNAVAILABLE)
            context.set_details(str(e))
            self.logger.error(str(e))
            traceback.print_exc()
        return response
    
    def CreateStreamForUser(self, request, context):
        """
        Creates a stream entity for a user.
        Will make sure one user can have at most one corresponding stream entity.
        If stream already exists for userId, returns the existing stream entity instead.
        Need to work around datastore transaction limitation. 
        https://stackoverflow.com/questions/14397207/why-do-i-get-only-ancestor-queries-are-allowed-inside-transactions-error
        """
        response = streams_pb2.CreateStreamForUserResponse()
        if not request.value:
            context.set_code(grpc.StatusCode.UNAVAILABLE)
            context.set_details("request.value is required")
            return response
        
        query = self.datastore_client.query(kind=ENTITY_KIND)
        query.add_filter("userId", "=", request.value)
        result = list(query.fetch(limit = 1))
        if len(result) > 0:
            # stream already exists.
            map_entity_to_stream(result[0], response.stream)
            response.success = True
            return response
        try:
            with self.datastore_client.transaction():
                key = self.datastore_client.key(ENTITY_KIND)
                stream_entity = datastore.Entity(key=key, exclude_from_indexes=["description", "title"])
                stream_key = random_stream_key()
                stream_entity.update({
                    "streamKey": stream_key,
                    "description": "My Stream decription",
                    "title": "My Stream title",
                    "userId": request.value,
                })
                self.datastore_client.put(stream_entity)
                response.success = True
                map_entity_to_stream(stream_entity, response.stream)
        except Exception as e:
            self.logger.error(e)
            traceback.print_exc(e)
            context.set_code(grpc.StatusCode.UNAVAILABLE)
            context.set_details(str(e))
            response.success = False
        return response
