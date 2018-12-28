import users_pb2_grpc
import users_pb2
import health_check_pb2
import health_check_pb2_grpc


mock_user_response = users_pb2.GetUserResponse()
mock_user_response.user.id = 1
mock_user_response.user.username = "family_guy"
mock_user_response.user.email = "family_guy@family.com"
mock_user_response.user.profile.avatarURL = "/static/avatars/3.png"

class UsersServicer(users_pb2_grpc.UserServiceServicer):
    def __init__(self):
        pass

    def GetById(self, request, context):
        return mock_user_response

    def GetByUsername(self, request, context):
        return mock_user_response
    
    def GetByEmail(self, request, context):
        return mock_user_response

    def CreateUser(self, request, context):
        return users_pb2.CreateUserResponse(created=True)

class HealthCheck(health_check_pb2_grpc.HealthServicer):
    def __init__(self):
        pass

    def Check(self, request, context):
        return health_check_pb2.HealthCheckResponse(
            status=health_check_pb2.HealthCheckResponse.ServingStatus.SERVING
        )