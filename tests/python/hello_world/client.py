from __future__ import print_function

import grpc

import hello_pb2
import hello_pb2_grpc


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:8080') as channel:
        stub = hello_pb2_grpc.GreeterStub(channel)
        response = stub.SayHello(hello_pb2.HelloRequest(name='lalalala'))
    print("Greeter client received: " + response.message)

if __name__ == '__main__':
    run()
