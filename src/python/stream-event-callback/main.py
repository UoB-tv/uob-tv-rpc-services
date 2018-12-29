from flask import Flask
from flask import abort
from flask import request
import time
import logging

logger = logging.getLogger("stream-event-emitter.main")

app = Flask(__name__)

a = {
        #           "action": "on_connect",
        #           "client_id": 1985,
        #           "ip": "192.168.1.10", "vhost": "video.test.com", "app": "live",
        #           "tcUrl": "rtmp://video.test.com/live?key=d2fa801d08e3f90ed1e1670e6e52651a",
        #           "pageUrl": "http://www.test.com/live.html"
        #       }
 }

allowed_host="ingest.uob-tv.co.uk"
app = "live/stream"

@app.route("/on_connect", methods=["POST"])
def on_connect():
    if not request.json:
        abort(400)
    json = request.json
    return "0",200

@app.route("/on_publish", methods=["POST"])
def on_publish():
    """
    Send message to PubSub when a user starts streaming.
    which will cause a hls-server instance on to be created on demand.
    """
    if not request.json:
        abort(400)
    try:
        payload = request.json;
        assert payload["action"] = "on_publish"

    #{
    #           "action": "on_publish",
    #           "client_id": 1985,
    #           "ip": "192.168.1.10", "vhost": "video.test.com", "app": "live",
    #           "stream": "livestream"
    #}
    except:
        abort(400)

    return "", 200

@app.route("/on_unpublish", methods=["POST"])
def on_unpublish():
    """
    Send message to PubSub for when a user stops streaming, so we can spin
    down a hls server instance.
    """
    if not requests.json:
        abort(400)
    
    return "0", 200
