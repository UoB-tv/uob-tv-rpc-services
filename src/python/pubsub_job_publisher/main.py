from google.cloud import pubsub_v1

import uuid
import time
import json
import logging
from argparse import ArgumentParser

from pubsub_job_pb2 import PubSubJobMessage
from pubsub_job_pb2 import VideoTranscodeJobArgs

logger = logging.getLogger("pubsub-job-publisher")
logger.setLevel(logging.INFO)

publisher_args = ArgumentParser("pubsub-job-publisher")

publisher_args.add_argument(
    "-p",
    "--project_id",
    type=str,
    required=True,
    help="GCP Project ID",
)

publisher_args.add_argument(
    "-t",
    "--topic_name",
    type=str,
    required=True,
    help="GCP topic name.",
)

all_job_args = publisher_args.add_subparsers(dest="job_args")

video_transcode_job_args = all_job_args.add_parser("video-transcode")

video_transcode_job_args.add_argument(
    "-b",
    "--bucket_name",
    type=str,
    required=True,
    help="Source bucket name"
)

video_transcode_job_args.add_argument(
    "-r",
    "--gs_raw_video",
    required= True,
    help="Google Storage path for the raw video file",
)

video_transcode_job_args.add_argument(
    "-f",
    "--format",
    choices=["mp4", "flv"],
    required=True,
    help="Video file format",
)

video_transcode_job_args.add_argument(
    "-o",
    "--output_sizes",
    type=str,
    nargs='+',
    help="Output window size",
)

video_transcode_job_args.add_argument(
    "-u",
    "--converted_video_path",
    type=str,
    required=True,
    help="Google Storage path for transcoded segment files."
)

video_transcode_job_args.add_argument(
    "-c",
    "--converted_video_bucket",
    type=str,
    required=True,
    help="Bucket name to upload converted video segment files"
)

class Callback(object):

    def __init__(self, topic_name, **kwargs):
        self.topic_name = topic_name

    def __call__(self, message_future):
        # wait for some time for job to process.
        print("done_callback")
        if message_future.exception(timeout=60):
            logger.info(
                "Publishing message to topic {} throw exception {} ".format(
                    self.topic_name,
                    message_future.exception(),
                )
            )
        else:
            logger.info("successfully published to topic: {}, message: {}".format(self.topic_name, message_future.result()))

def main():
    try: 
        namespace = publisher_args.parse_args()
        print(namespace)
        publisher = pubsub_v1.PublisherClient()
        topic_path = publisher.topic_path(namespace.project_id, namespace.topic_name)
        
        callback = Callback(namespace.topic_name)

        video_transcode_job = VideoTranscodeJobArgs()
        job_message = PubSubJobMessage()

        video_transcode_job.bucketName = namespace.bucket_name
        video_transcode_job.gsRawVideo = namespace.gs_raw_video
        video_transcode_job.format = namespace.format
        
        for o in namespace.output_sizes:
            video_transcode_job.outputSizes.append(o)

        video_transcode_job.convertedVideoBucket = namespace.converted_video_bucket
        video_transcode_job.convertedVidePath = namespace.converted_video_path
        
        job_message.jobId = "{}".format(uuid.uuid4())
        job_message.jobType = "video-transcode"
        job_message.videoTranscodeJobArgs.CopyFrom(video_transcode_job)

        message_future = publisher.publish(topic_path, job_message.SerializeToString())
        message_future.add_done_callback(callback)
        while True:
            time.sleep(30)
    except Exception as e:
        logger.error("%", e)

if __name__ == "__main__":
    main()
