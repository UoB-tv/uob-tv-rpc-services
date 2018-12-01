python_binary(
    name = "server",
    dependencies = [
        "src/python/generated:grpc_generated_service",
        "src/python/hello_world/service:hello_world_service",
        "3rdparty/python:grpcio"
    ],
    source = "server.py"
)