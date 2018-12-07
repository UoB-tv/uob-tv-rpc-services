FROM eu.gcr.io/uob-tv-project-dev/uob-tv-python3:v1
ARG BINARY
ENV BIN=$BINARY

# install ffmpeg on ubuntu
RUN apt-get update -y && \
    apt-get install ffmpeg -y

# copy batch binary to python
COPY $BINARY  /
