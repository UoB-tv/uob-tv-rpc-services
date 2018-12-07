FROM eu.gcr.io/uob-tv-project-dev/uob-tv-python3:v1

# install ffmpeg on ubuntu
RUN apt-get update -y && \
    apt-get install wget xz-utils -y && \
    wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-i686-static.tar.xz && \
    ls / && \
    tar -xf "ffmpeg-release-i686-static.tar.xz" && \
    cp ffmpeg-4.1-32bit-static/ffmpeg /usr/bin/ && \
    cp ffmpeg-4.1-32bit-static/ffprobe /usr/bin/ && \
    rm *.xz && \
    rm -rf ffmpeg-4.1-32bit-static && \
    apt-get remove wget xz-utils -y && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*
