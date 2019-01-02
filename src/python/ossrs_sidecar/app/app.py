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
GRPC_PORT = os.environ.get("GRPC_PORT", 6000)

channel = ""

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "version": VERSION,
        "serviceName": SERVICE,
    })

@app.route("/api/v1/callbacks/on_connect")
def on_connect():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_publish")
def on_publish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_unpublish")
def on_unpublish():
    global request
    return "0"

@app.route("/api/v1/callbacks/on_close")
def on_close():
    global request
    return "0"
