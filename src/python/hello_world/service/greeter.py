import generated.hello_pb2_grpc as hello_grpc
import generated.hello_pb2

class Greeter(hello_grpc.GreeterServicer):
    def SayHello(self, request, context):
        return generated.hello_pb2.HelloReply(message='Hello, %s!' % request.name)
