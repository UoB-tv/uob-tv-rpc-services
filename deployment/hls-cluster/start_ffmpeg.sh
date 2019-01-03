#!/bin/bash

# $HLS_OUTPUT_DIR: output directory of HLS segments by ffmpeg
# $HLS_FILE_NAME: file prefix of hls segment and manifest files.
# $RTMP_SOURCE: needs to be format: rtmp://<rtmp server url>/live/stream
# $STREAM_KEY: stream key
# $STREAM_ID: id of stream to route HLS playback requests

cd $HLS_OUTPUT_DIR
ffmpeg -i ${RTMP_SOURCE}/${STREAM_KEY} -c:v copy -c:a copy -hls_list_size 20 -segment_time 2 -hls_time 2 -hls_flags delete_segments -segment_list_flags +live -hls_delete_threshold 1 -hls_allow_cache 0 ${HLS_FILE_NAME}.m3u8
