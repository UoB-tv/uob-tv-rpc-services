./pants run src/python/video_transcode_job:video-transcode-job \
    -- -b uob-tv-videos \
    -r uploads/rabbit.mp4 \
    -f mp4 \
    -o 720 \
    -c uob-tv-videos-public \
    -u vods/i0as8id8f0adf
