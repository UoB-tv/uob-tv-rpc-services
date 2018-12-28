#!/bin/sh

echo "starting server..."

if [ $# -gt 0 ]; then
    echo "Running $1"
    python3 $1
else
    echo "no PEX executable specified"
fi

# docker run --name hello2 -it eu.gcr.io/uob-tv-project-dev/hello-world-server:1 && docker attach hello2