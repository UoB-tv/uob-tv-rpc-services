import streams_pb2_grpc
import streams_pb2
import users_pb2_grpc
import users_pb2
import grpc
import argparse
import sys

service_stub_map = {
    "streams" : streams_pb2_grpc.StreamServiceStub,
    "users": users_pb2_grpc.UserServiceStub,
}

def main():
    service_name = sys.argv[1]
    channel = grpc.insecure_channel("localhost:6000")
    stub = service_stub_map.get(service_name, "")
    if not stub:
        print("service does not exist")
        exit(-1)
    
    service = stub(channel=channel)
    print("making call...")
    call(service)

def call(service):
    result = service.CreateStreamForUser(streams_pb2.UserId(value=1))
    print("stream: ", result)

if __name__ == "__main__":
    main()
