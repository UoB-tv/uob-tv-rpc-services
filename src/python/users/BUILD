python_binary(
    name="users-server",
    dependencies=[
        "generated/python:grpc_generated_services",
        "src/python/users/service:users_service",
        "3rdparty/python:grpcio",
    ],
    source="main.py",
    platforms=[
        'current',
        'linux_x86_64-cp-37-cp37m',
        'macosx-10.12-x86_64',
    ]
)
