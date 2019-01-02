import users_pb2_grpc
import users_pb2
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

def get_name_from_email(email):
    i = email.find("@")
    if i < 0:
        return email
    return email[:i]

class UsersServicer(users_pb2_grpc.UserServiceServicer):
    def __init__(self):
        self.datastore_client = datastore.Client.from_service_account_json(GOOGLE_APPLICATION_CREDENTIALS)

    def GetById(self, request, context):

        user = users_pb2.User()
        if not request.id:
            return user

        entity_key = self.datastore_client.key(kind=KIND, key=request.id)
        entity = self.datastore_client.Entity(key=key)

        user.email = user_entity["email"]
        user.id = int(user_entity.id)
        user.profile.avatarURL = user_entity["profile.avatarURL"]

        return user

    def GetByUsername(self, request, context):
        user = users_pb2.User()
        if not request.username:
            return user

        query = self.datastore_client.query(kind=KIND)
        query.add_filter("username", "=", request.username)
        result = list(query.fetch(limit=1))
        if len(result) < 1:
            return user
        user_entity = result[0]
        
        user.email = user_entity["email"]
        user.id = int(user_entity.id)
        user.profile.avatarURL = user_entity["profile.avatarURL"]
        return user

    def GetByEmail(self, request, context):
        user = users_pb2.User()
        if not request.email:
            return user

        query = self.datastore_client.query(kind=KIND)
        query.add_filter("email", "=", request.email)
        result = list(query.fetch(limit = 1))
        if len(result) < 1:
            return user
        user_entity = result[0]

        user.email = user_entity["email"]
        user.id = int(user_entity.id)
        user.profile.avatarURL = user_entity["profile.avatarURL"]
        return user

    def CreateUser(self, request, context):
        if not request.email:
            return users_pb2.CreateUserResponse(created=False, error="Email is not present.")

        user_key = None
        if request.id:
            user_key = self.datastore_client.key(KIND, request.id)
        else:
            user_key = self.datastore_client.key(KIND)
        try:
            user_entity = self.datastore_client.Entity(key=user_key)

            user_entity.update({
                "email": request.email,
                "username": get_name_from_email(request.email),
                "profile.avatarURL": "/static/avatars/1.png",
            })
            self.datastore_client.put(user_entity)
            return users_pb2.CreateUserResponse(created=True)
        except Exception as e:
            logger.error("Error creating user %s", str(e))
            return users_pb2.CreateUserResponse(
                created=False,
                error=str(e)
            )

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )