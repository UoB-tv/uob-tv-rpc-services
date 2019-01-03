import os
import grpc


from flask import Flask
from flask import abort
from flask import request
from flask import jsonify


import streams_pb2
import streams_pb2_grpc


app = Flask("ossrs_sidecar.app")
VERSION = "0.1"
SERVICE = "ossrs_sidecar"
SERVICES_DOMAIN = os.environ.get("SERVICES_DOMAIN", "")
GRPC_PORT = os.environ.get("GRPC_PORT", 6000)

streams_service_host = "streams" + (SERVICES_DOMAIN and ".") + SERVICES_DOMAIN
streams_service_port = 6000

channel = grpc.insecure_channel("{}:{}".format(streams_service_host, streams_service_port))
stream_service = streams_pb2_grpc.StreamServiceStub(channel)

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "version": VERSION,
        "serviceName": SERVICE,
    })

@app.route("/api/v1/callbacks/on_connect", methods=["POST"])
def on_connect():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_publish", methods=["POST"])
def on_publish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_unpublish", methods=["POST"])
def on_unpublish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_close", methods=["POST"])
def on_close():
    global request
    return "0"
