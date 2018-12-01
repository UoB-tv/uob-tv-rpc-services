from __future__ import absolute_import, print_function
from hello_world.service.greeter import Greeter

from concurrent import futures
import grpc
import time

def serve():
    print("hello world")

if __name__ == "__main__":
    serve()
    