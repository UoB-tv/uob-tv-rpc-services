python_binary(
    name = "user-authen-server",
    dependencies = [
        "generated/python:grpc_generated_services",
        "3rdparty/python:grpcio",
        "3rdparty/python:requests",
        "3rdparty/python:google-auth",
        "3rdparty/python:Flask",
        "3rdparty/python:gevent",
        "3rdparty/python:PyJWT",
    ],

    source = "main.py",

    platforms=[
        'current',
        'linux-x86_64',
        'macosx-10.12-x86_64',
    ],
)