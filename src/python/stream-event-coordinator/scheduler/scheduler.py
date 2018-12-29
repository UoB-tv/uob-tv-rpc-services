from google.cloud import pubsub_v1

import pubsub_job_pb2

import time
import json
import logging

logger = logging.getLogger("pubsub_job_scheduler.scheduler")

class Scheduler(object):
    def __init__(self, project_id, subscription_name):
        self.subscriber = pubsub_v1.SubscriberClient()
        self.subscription_path = self.subscriber.subscription_path(
            project_id,
            subscription_name,
        )
        self.callback = ScheduleJob()
    
    def start(self):
        self.subscriber.subscribe(self.subscription_path, callback=self.callback)

class ScheduleJob(object):
    def __init__(self):
        pass

    def __call__(self, message):
        job_message = pubsub_job_pb2.PubSubJobMessage()
        try:
            job_message.ParseFromString(message.data)
            print("decoded message: {}".format(job_message.jobType))
            print("decoded message: {}".format(job_message.jobId))
            print("VideoTranscodeJobArg is Set: {}".format(job_message.HasField("videoTranscodeJobArgs")))
            print("decoded message: {}".format(job_message.videoTranscodeJobArgs))
            message.ack()
        except Exception as e:
            logger.error("can't decode protobuf of type PubSubJobMessage from message data: {}".format(message))

        logger.info("processed message")
