python_binary(
    name = "hello-world-server",
    dependencies = [
        "generated/python:grpc_generated_services",
        "src/python/hello_world/service:hello_world_service",
        "3rdparty/python:grpcio",
        "3rdparty/python:grpcio-opentracing",
        "3rdparty/python:opentracing"
    ],
    source = "server.py",
    entry_point = "hello_world.server",
    platforms=[
        'current',
        'linux-x86_64',
        'macosx-10.12-x86_64',
    ],
)