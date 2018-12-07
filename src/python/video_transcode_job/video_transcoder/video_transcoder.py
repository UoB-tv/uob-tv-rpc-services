from google.cloud import storage
import os
import time
import logging

logger = logging.getLogger("video_transcode_job.file_download")

class FileDownloadTask(object):
    def __init__(self, bucket, remotePath, saveFilename):
        self.bucket = bucket
        self.remotePath = remotePath
        self.saveFilename = saveFilename

    def __call__(self):
        try:
            start_time = time.time()
            self.download()
            end_time = time.time()
            logger.info("download video file gs://{}/{} finished and saved to {}".format(
                self.bucket,
                self.remotePath,
                self.saveFilename)
            )
            return True
        except Exception as e:
            logger.error("error downloading file: gs://{}/{}, error: {}".format(self.bucket, self.remotePath, e))
            return False
    
    def download(self):
        client = storage.Client(self.bucket)
        bucket = client.bucket(bucket_name=self.bucket)
        blob = bucket.get_blob(remotePath)
        blob.download_to_filename(filename=self.savePath)

class VideoTranscodeTask(object):
    def __init__(self, localVideoFile, format, outputSize, outputPath):
        self.videoFile = localVideoFile
        self.format = format
        self.outputSize = outputSize
        self.outputPath = outputPath
    
    def __call__(self):
        command = "ffmpeg -i {file} -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8"
        os.system()

        ffmpeg -i rabbit.mp4 -codec:v libx264 -codec:a aac -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls output/rabbit.m3u8 
