from pubsub_job_scheduler.scheduler.scheduler import Scheduler
import argparse
import time
import logging

logger = logging.getLogger("pubsub_job_scheduler.main")

args = argparse.ArgumentParser("pubsub-job-scheduler")

args.add_argument(
    "-s",
    "--subscription_name",
    required=False,
    help="GCP PubSub subscription name where video proc batch jobs are submitted to.",
)

args.add_argument(
    "-p",
    "--project-id",
    required=False,
    help="GCP Project ID",
)

def main():
    configs = {}
    try:
        with fopen("/etc/config/video-proc-batch-config.yaml", "r") as config_file:
            configs = yaml.load(config_file)
    except Exception as e:
        logger.warn("Could not load /etc/config/video-proc-batch-config.yaml, defaulting to command line options")

    namespace = args.parse_args()

    scheduler = Scheduler(
        project_id=namespace.project_id,
        subscription_name=namespace.subscription_name
    )

    scheduler.start()

    while True:
        time.sleep(60)


if __name__ == "__main__":
    main()