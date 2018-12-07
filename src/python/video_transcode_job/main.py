from argparse import ArgumentParser

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
    type=list,
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
    # namespace = job_args.parse_args()
    pass

if __name__ == "__main__":
    main()