./pants run src/python/pubsub-job-publisher:pubsub-job-publisher -- \ 
    -p uob-tv-project-dev -t video-proc-jobs-topic \

./pants run src/python/pubsub-job-publisher:pubsub-job-publisher -- -h

./pants run src/python/pubsub-job-publisher:pubsub-job-publisher -- video-transcode -h


./pants run src/python/pubsub_job_publisher:pubsub-job-publisher \
    -- -p uob-tv-project-dev -t video-proc-jobs-topic \
    video-transcode \
        -b uob-tv-videos \
        -r uploads/rabbit.mp4 \
        -f mp4 \
        -o "720" \
        -c uob-tv-videos-public \
        -u rabbit/hls/
