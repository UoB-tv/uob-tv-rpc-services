from argparse import ArgumentParser
from concurrent import futures
import logging
import uuid
import os
from shutil import rmtree

from video_transcode_job.video_transcoder.tasks import FileDownloadTask
from video_transcode_job.video_transcoder.tasks import VideoTranscodeTask
from video_transcode_job.video_transcoder.tasks import DirectoryUploadTask

logger = logging.getLogger("video-trancode-job.main")
logger.setLevel(logging.INFO)

configs = []

job_args = ArgumentParser("video_transcode_job")

job_args.add_argument(
    "-b",
    "--bucket_name",
    type=str,
    required=True,
    help="Source bucket name"
)

job_args.add_argument(
    "-r",
    "--gs_raw_video",
    required= True,
    help="Google Storage path for the raw video file",
)

job_args.add_argument(
    "-f",
    "--format",
    choices=["mp4", "flv"],
    required=True,
    help="Video file format",
)

job_args.add_argument(
    "-o",
    "--output_sizes",
    type=str,
    nargs='+',
    help="Output window size",
)

job_args.add_argument(
    "-u",
    "--converted_video_path",
    type=str,
    required=True,
    help="Google Storage path for transcoded segment files."
)

job_args.add_argument(
    "-c",
    "--converted_video_bucket",
    type=str,
    required=True,
    help="Upload bucket name."
)

def main():
    job_id = uuid.uuid4()
    
    tmp_dir = "/tmp/video-transcode-job-{}".format(uuid.uuid4())

    output_dir = os.path.join(tmp_dir, "output")
    logger.info("temp directory created at: {}".format(tmp_dir))

    os.makedirs(output_dir)

    video_filename = os.path.join(tmp_dir, "video.mp4")
    namespace = job_args.parse_args()
    print(namespace)
    
    try:
        download_task = FileDownloadTask(
            bucket=namespace.bucket_name,
            remote_path=namespace.gs_raw_video,
            save_filename=video_filename,
        )
        
        download_task()

        transcode_task = VideoTranscodeTask(
            local_video_file=video_filename,
            format=namespace.format,
            output_size="720",
            output_path=output_dir,
        )

        transcode_task()

        upload_task = DirectoryUploadTask(
            bucket_name=namespace.converted_video_bucket,
            remote_path=namespace.converted_video_path,
            directory=output_dir
        )

        upload_task()

    except Exception as e:
        print(e)
    finally:
        rmtree(tmp_dir)

if __name__ == "__main__":
    main()