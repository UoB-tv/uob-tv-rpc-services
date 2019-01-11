import users_v2_pb2_grpc
import users_v2_pb2
import health_check_pb2
import health_check_pb2_grpc

import logging
import os
import sys
import uuid
import base64
import grpc

from google.cloud import datastore

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger(__name__)

GOOGLE_APPLICATION_CREDENTIALS = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", None)

if GOOGLE_APPLICATION_CREDENTIALS is None:
    logger.error("Environment variable GOOGLE_APPLICATION_CREDENTIALS is required")
    exit(-1)

USER_KIND = "User"
CHANNEL_ID_KIND = "ChannelId"
STREAM_ID_KIND = "StreamId"

def get_name_from_email(email):
    i = email.find("@")
    if i < 0:
        return email
    return email[:i]

def random_stream_key():
    return base64.urlsafe_b64encode(uuid.uuid1().bytes).decode('utf8').rstrip('=\n')


def map_user_entity_to_user_pb(user_entity, channel_id_entity, stream_id_entity):
    user = users_v2_pb2.User()
    user.userId = int(user_entity.id)
    user.username = user_entity["username"]
    user.profile.avatarURL = user_entity["profile"]["avatarURL"]
    user.channel.value = int(channel_id_entity.id)
    user.stream.id = int(stream_id_entity.id)
    user.stream.streamKey = stream_id_entity["streamKey"]
    return user

class UsersServicer(users_v2_pb2_grpc.UserServiceServicer):
    def __init__(self, channelClient):
        self.datastore_client = datastore.Client.from_service_account_json(GOOGLE_APPLICATION_CREDENTIALS)

    def GetUserById(self, request, context):
        user_entity, channel_id, stream_id = self._getUserById(request.value)
        if user_entity is None:
            logger.info("userID %s is not found", request.value)
            context.set_code(grpc.StatusCode.NOT_FOUND)
            return user
        return map_user_entity_to_user_pb(user_entity, channel_id, stream_id)

    def _getUserById(self, userId):
        with self.datastore_client.transaction():
            user_key = self.datastore_client.key(USER_KIND, userId)
            user = self.datastore_client.get(user_key)
            if user is None:
                return None, None, None

            channel_id_query = self.datastore_client.query(
                kind=CHANNEL_ID_KIND, ancestor=user.key)
            channel_id = list(channel_id_query.fetch(limit=1))

            stream_id_query = self.datastore_client.query(
                kind=STREAM_ID_KIND, ancestor=user.key
            )

            stream_id = list(stream_id_query.fetch(limit=1))
        return user, channel_id[0], stream_id[0]


    def GetUserByEmail(self, request, context):
        user_entity, channel_id, stream_id = self._getUserById(request.value)
        if user_entity is None:
            logger.info("userID %s is not found", request.value)
            context.set_code(grpc.StatusCode.NOT_FOUND)
            return user
        return map_user_entity_to_user_pb(user_entity, channel_id, stream_id)

    def _getUserByEmail(self, email):
        query = self.datastore_client.query(kind=USER_KIND)
        query.add_filter("email", "=", email)
        user_entitys = list(query.fetch(limit = 1))
        
        if len(user_entitys) < 1:
            return None, None, None

        user = user_entitys[0]

        with self.datastore_client.transaction():
            channel_id_query = self.datastore_client.query(
                kind=CHANNEL_ID_KIND, ancestor=user.key)
            channel_id = list(channel_id_query.fetch(limit=1))

            stream_id_query = self.datastore_client.query(
                kind=STREAM_ID_KIND, ancestor=user.key
            )

            stream_id = list(stream_id_query.fetch(limit=1))
        return user, channel_id[0], stream_id[0]

    def _initialize_account(self, data):
        email = data.googleUserEmail
        userId = data.googleUserId
        username = get_name_from_email(email)

        logger.info("initializing user account for id %s", userId)
        with self.datastore_client.transaction():
            entity_key = self.datastore_client.key(USER_KIND, userId)
            user_entity = datastore.Entity(
                key=entity_key,
                exclude_from_indexes=["profile"],
            )

            user_entity.update({
                "email": email,
                "username": username,
                "profile": {
                    "avatarURL": "/static/avatars/1.png",
                },
            })
            self.datastore_client.put(user_entity)

            stream_id_entity_key = self.datastore_client.key(
                STREAM_ID_KIND,
                parent=entity_key
            )

            channel_id_entity_key = self.datastore_client.key(
                CHANNEL_ID_KIND, 
                parent=entity_key
            )
            stream_id_entity = datastore.Entity(
                key=stream_id_entity_key,
            )
            stream_id_entity["streamKey"] = random_stream_key()
            channel_id_entity = datastore.Entity(
                key=channel_id_entity_key,
            )

            self.datastore_client.put(stream_id_entity)
            self.datastore_client.put(channel_id_entity)
        
        logger.info("user entity created %s", user_entity)

        return user_entity, channel_id_entity, stream_id_entity

    def InitializeUserAccount(self, request, context):
        user_entity, channel_id_entity, stream_id_entity = self._initialize_account(request)
        return map_user_entity_to_user_pb(user_entity, channel_id_entity, stream_id_entity)
    

    def InitializeIfNotExist(self, request, context):
        user_entity, channel_id, stream_id  = self._getUserById(request.userId)
        if user_entity is None:
            user_entity, channel_id, stream_id = self._initialize_account()
        return map_user_entity_to_user_pb(user_entity, channel_id, stream_id)
        
    
    def _userExist(self, email):
        query = self.datastore_client.query(kind=USER_KIND)
        query.add_filter("email", "=", email)
        query.keys_only()
        result = list(query.fetch(limit = 1))
        
        if len(result) < 1:
            return False
        return True
    
    def UserExists(self, request, context):
        result = self._userExist(request.value)
        return users_v2_pb2.Boolean(value=result)
        
class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )
