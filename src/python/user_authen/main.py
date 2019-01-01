import os
import sys
import logging

from gevent.pywsgi import WSGIServer
from flask import Flask, abort
from flask import request, jsonify
from google.oauth2 import id_token
from google.auth.transport import requests
import jwt

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger("user-authen-server.main")

app = Flask("user-authen-server")

def require_env_var(name, optional=False):
    env_var = os.environ.get(name, default=None)
    if env_var is None and not optional:
        logger.error("%s variable must be set.", name)
        exit(-1)

VERSION = 0.1

GOOGLE_SIGN_IN_CLIENT_ID = require_env_var("GOOGLE_SIGN_IN_CLIENT_ID")
ALLOWED_GSUITE_DOMAIN = require_env_var("ALLOWED_GSUITE_DOMAIN", optional=True)
API_AUTH_JWT_SECRET = require_env_var("API_AUTH_JWT_SECRET")

def service_info():
    return {
        "serviceName" : "user-authen",
        "version" : str(VERSION),
    }

def generate_jwt_token():
    return {
        "accessToken": "ajldjfaljdf",
    }

@app.route("/")
def index():
    return jsonify(service_info())

@app.route("/verify_signin", methods=["POST"])
def verify_signin():
    if not request.json:
        abort(400)

    if request.json.get("id_token", default=None) is None:
        abort(400)
    id_token_str = request.json.get("id_token")
    print("hello world")
    try: 
        idinfo = id_token.verify_oauth2_token(
            id_token_str, requests.Request(), GOOGLE_SIGN_IN_CLIENT_ID)
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            logger.info("verification failed, wrong issuers, %s", idinfo['iss'])
            abort(403)
    except ValueError:
        logger.info("verification failed, not a valid token", id_token_str)
        abort(403)

    if ALLOWED_GSUITE_DOMAIN is not None:
        if idinfo['hd'] != ALLOWED_GSUITE_DOMAIN:
            logger.info("wrong domain: required %s, got %s", ALLOWED_GSUITE_DOMAIN, idinfo['iss'])
            abort(403)
    return jsonify(generate_jwt_token())


def main():
    http_server = WSGIServer(("", 8080), app, log=logger, error_log=logger)
    http_server.serve_forever()

if __name__ == "__main__":
    main()