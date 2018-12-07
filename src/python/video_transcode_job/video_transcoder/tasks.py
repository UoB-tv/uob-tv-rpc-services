from google.cloud import storage
import os
import time
import logging

logger = logging.getLogger("video_transcode_job.tasks")

ffmpeg_cmd_template = """ffmpeg -hide_banner -y -i {file} -threads 4 \\
  -vf scale=w=640:h=360:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod  -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k -hls_segment_filename {output_path}/360p_%03d.ts {output_path}/360p.m3u8 \\
  -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_segment_filename {output_path}/480p_%03d.ts {output_path}/480p.m3u8 \\
  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename {output_path}/720p_%03d.ts {output_path}/720p.m3u8 \\
"""

ffmpeg_manifest_template = """#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360
360p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=842x480
480p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720
720p.m3u8
"""

class FileDownloadTask(object):
    def __init__(self, bucket, remote_path, save_filename):
        self.bucket = bucket
        self.remote_path = remote_path
        self.save_filename = save_filename

    def __call__(self):
        try:
            logger.info("downloading video file {}".format(self.remote_path))
            start_time = time.time()
            self.download()
            end_time = time.time()

            logger.info("finished downloading video file gs://{}/{} finished and saved to {}".format(
                self.bucket,
                self.remote_path,
                self.save_filename)
            )
        except Exception as e:
            logger.error("error downloading file: gs://{}/{}, error: {}".format(self.bucket, self.remote_path, e))
            logger.error(e)
            raise e

    def download(self):
        client = storage.Client(self.bucket)
        bucket = client.bucket(bucket_name=self.bucket)
        blob = bucket.get_blob(self.remote_path)
        blob.download_to_filename(filename=self.save_filename)

class VideoTranscodeTask(object):
    def __init__(self, local_video_file, format, output_size, output_path):
        self.local_video_file = local_video_file
        self.format = format
        self.output_size = output_size
        self.output_path = output_path
    
    def __call__(self):
        self._transcode()
        self._write_manifest()

    def _transcode(self):
        command = ffmpeg_cmd_template.format(
            file=self.local_video_file,
            output_path=self.output_path,
        )

        exit_status = os.system(command)

        if exit_status != 0:
            raise Exception("error happened when transcoding video")

    def _write_manifest(self):
        manifest_path = os.path.join(self.output_path, "manifest.m3u8")
        with open(manifest_path, "w") as manifest_file:
            manifest_file.write(ffmpeg_manifest_template)

class DirectoryUploadTask(object):
    def __init__(self, bucket_name, remote_path, directory):
        self.bucket_name = bucket_name
        self.remote_path = remote_path
        self.local_directory = directory
    
    def __call__(self):
        self._upload()

    def _upload(self):
        logger.info("uploading folder {} to storage bucket".format(self.local_directory))
        client = storage.Client()
        dest_bucket = client.get_bucket(bucket_name=self.bucket_name)

        dir = os.listdir(self.local_directory)
        for f in dir:
            filename = os.path.join(self.local_directory, f)
            if not os.path.isfile(filename):
                continue
            remote_object_name = self.remote_path + "/" + f
            blob = dest_bucket.blob(remote_object_name)
            blob.upload_from_filename(filename)
