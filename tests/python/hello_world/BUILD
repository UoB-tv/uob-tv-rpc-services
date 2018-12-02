python_binary(
    name = "hello-world-client",
    dependencies = [
        "generated/python:grpc_generated_services",
        "3rdparty/python:grpcio",
        "3rdparty/python:grpcio-opentracing",
        "3rdparty/python:opentracing"
    ],
    source = "client.py",
    platforms=[
        'current',
        'linux-x86_64',
        'macosx-10.12-x86_64',
    ],
)