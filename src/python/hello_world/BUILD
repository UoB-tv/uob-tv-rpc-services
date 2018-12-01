python_binary(
    name = "server",
    dependencies = [
        "generated/python:grpc_generated_services",
        "src/python/hello_world/service:hello_world_service",
        "3rdparty/python:grpcio"
    ],
    source = "server.py"
)