python_binary(
    name="ossrs_sidecar",
    dependencies=[
        "src/python/ossrs_sidecar/app:ossrs-sidecar-app",
        "3rdparty/python:grpcio",
        "3rdparty/python:Flask-Injector",
    ],
    source="main.py",
    platforms=[
        'current',
        'linux_x86_64-cp-37-cp37m',
        'macosx-10.12-x86_64',
    ]
)
