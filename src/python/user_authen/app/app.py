import os
import sys
import logging
import uuid
import random
import time

from flask import Flask, abort
from flask import request, jsonify
from google.oauth2 import id_token
from google.auth.transport import requests

import jwt

import users_pb2
import users_pb2_grpc
import grpc

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger("user-authen-app.app")

app = Flask("user-authen")

def current_time_millis():
    return int(time.time * 1000)

def require_env_var(name, optional=False, default=None):
    env_var = os.environ.get(name, default)
    if env_var is None and not optional:
        logger.error("%s variable must be set.", name)
        exit(-1)

VERSION = 0.1

TOKEN_VALID_DURATION = 1000 * 60 * 60 * 24 
GOOGLE_SIGN_IN_CLIENT_ID = require_env_var("GOOGLE_SIGN_IN_CLIENT_ID")
ALLOWED_GSUITE_DOMAIN = require_env_var("ALLOWED_GSUITE_DOMAIN", optional=True)
API_AUTH_JWT_SECRET = require_env_var("API_AUTH_JWT_SECRET")
ENVIRONMENT=require_env_var("ENVIRONMENT", optional=True)
debug = ENVIRONMENT == "development"
SERVICES_DOMAIN = require_env_var("SERVICES_DOMAIN", optional=True, default="")

users_service_host = "users-service" + (SERVICES_DOMAIN and ".") + SERVICES_DOMAIN
users_service_port = 6000


users_channel = grpc.insecure_channel("{}:{}".format(
        users_service_host,
        users_service_port,
))

users_service = users_pb2_grpc.UserServiceStub(users_channel)

def service_info():
    return {
        "serviceName" : "user-authen",
        "version" : str(VERSION),
    }

def generate_jwt_token(user):
    time_millis = current_time_millis()
    
    headers = {
        "alg": "HS256",
        "typ": "JWT"
    }

    payload = {
        "iss": "authen.uob-tv.co.uk",
        "exp": time_millis + TOKEN_VALID_DURATION,
        "sub": user.email,
        "aud": "api",
        "iat": time_millis,
    }

    return jwt.encode(
        payload,
        algorithm="HS256",
        secret=API_AUTH_JWT_SECRET,
        headers=headers,
    )

@app.route("/")
def index():
    return jsonify(service_info())

@app.route("/verify_signin", methods=["POST"])
def verify_signin():
    """
    Verify sign-in using google oauth library
    After verification, check in users service to
    see if user already exist.
    Non-existent user will created on the fly.
    """
    global request
    post = request.json
    if not post:
        abort(400)

    if request.json.get("id_token", default=None) is None:
        abort(400)
    id_token_str = request.json.get("id_token")
    print("hello world")
    idinfo = None
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
    # verification passes
    accessToken = None
    user = None
    try:
        request = users_pb2.GetUserByIdRequest()
        request.email = idinfo["email"]
        user = users_service.GetByEmail(request)
        
        if not user.id:
            user = User()
            user.email = idinfo["email"]
            user.id = random.randint(0, 2**30)
            user.username = idinfo["given_name"]
            result = users_service.CreateUser(user)

            if not result.created:
                logger.error("could not create user")
                abort(400)
    except Exception as e:
        logger.error("could not create user, %s", e)
        abort(404)

    try:
        token = generate_jwt_token(user)
        return {
            "accessToken": token,
        }
    except:
        abort(500)

def run_app(app):
    app.run(host="0.0.0.0", port=8080, debug=debug)

if __name__ == "__main__":
    run_app(app=app)