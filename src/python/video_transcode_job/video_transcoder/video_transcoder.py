from google.cloud import storage
import os


credentials = ServiceAccountCredentials.from_json_keyfile_dict(
    credentials_dict
)

client = storage.Client(credentials=credentials, project='myproject')

class VideoTranscoder(object):
    def __init__(self):
        pass
    