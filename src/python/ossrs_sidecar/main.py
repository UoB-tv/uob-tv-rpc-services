from ossrs_sidecar.app.app import app
import logging 
import grpc
import sys 

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger(__name__)

PORT = 30150
debug = True
def main(app):
    logger.info("starting server...")
    app.run("localhost", PORT, debug=True)

if __name__ == "__main__":
    main(app=app)