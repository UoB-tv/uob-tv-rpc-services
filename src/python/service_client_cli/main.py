import users_v2_pb2_grpc
import users_v2_pb2
import UserId_pb2
import grpc
import argparse
import sys

def users_test(service):
    #data = users_v2_pb2.UserInitialData(googleUserEmail="goodbye@gmail.com", googleUserId=654321)
    #result = service.InitializeUserAccount(data)
    result = service.UserExists(users_v2_pb2.Email(value="goodbye@gmail.com"))
    print("UserExists: ", result)
    result = service.GetUserById(UserId_pb2.UserId(value=654321))
    print("GetUserById: ", result)
    result = service.GetUserByEmail(users_v2_pb2.Email(value="goodbye@gmail.com"))
    print("GetUserByEmail: ", result)

service_stub_map = {
    "users": users_v2_pb2_grpc.UserServiceStub,
}
test_map = {
    "users": users_test
}

def main():
    service_name = sys.argv[1]
    channel = grpc.insecure_channel("localhost:6000")
    stub = service_stub_map.get(service_name, "")
    test = test_map.get(service_name, lambda x: None)
    if not stub:
        print("service does not exist")
        exit(-1)
    
    service = stub(channel=channel)
    print("making call...")
    test(service)

if __name__ == "__main__":
    main()
