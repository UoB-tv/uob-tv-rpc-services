#!/bin/sh


ffmpeg -f lavfi -i testsrc=size=640x480:rate=30 -f flv -pix_fmt yuv420p -acodec libfaac -vcodec libx264 -preset veryfast rtmp://10.31.243.186/live/stream/test1234

ffmpeg -f lavfi -i testsrc=size=640x480:rate=30 -pix_fmt yuv420p -acodec libfaac -vcodec libx264 -preset veryfast -f mpegts rtmp://10.31.243.186/live/stream/test1234

ffmpeg -f lavfi -i testsrc=size=640x480:rate=30 -f flv -pix_fmt yuv420p -acodec libfaac -vcodec libx264 -preset veryfast -t 5 a.mp3

ffmpeg -f lavfi -i testsrc=size=640x480:rate=30 -pix_fmt yuv420p -acodec libfaac -vcodec libx264 -preset veryfast -f mpegts rtmp://ingest.uob-tv.co.uk/live/stream/test1234
ffmpeg -f lavfi -i testsrc=size=640x480:rate=30 -pix_fmt yuv420p -acodec libfaac -vcodec libx264 -preset veryfast -f flv rtmp://ingest.uob-tv.co.uk/live/stream/test1235


ffmpeg -i rtmp://ingest.uob-tv.co.uk/live/stream/test1234 -c:v copy -c:a copy -hls_list_size 20 -segment_time 2 -hls_time 2 -hls_flags delete_segments -segment_list_flags +live -hls_delete_threshold 1 -hls_allow_cache 0 segments.m3u8