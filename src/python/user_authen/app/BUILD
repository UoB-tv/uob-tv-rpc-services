python_library(
    name = "user-authen-app",
    dependencies = [
        "generated/python:grpc_generated_services",
        "3rdparty/python:requests",
        "3rdparty/python:requests-oauthlib",
        "3rdparty/python:google-auth",
        "3rdparty/python:grpcio",
        "3rdparty/python:Flask",
        "3rdparty/python:gunicorn",
        "3rdparty/python:PyJWT",
    ],
    sources=globs("*.py")
)