import hello_pb2_grpc as hello_grpc
import hello_pb2

class Greeter(hello_grpc.GreeterServicer):
    def SayHello(self, request, context):
        return hello_pb2.HelloReply(message='Hello, %s!' % request.name)
