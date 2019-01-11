FROM eu.gcr.io/uob-tv-project-dev/uob-tv-python3:v2
ARG BINARY
ENV BIN=$BINARY  

COPY $BINARY  /
COPY entry_point.sh /
RUN chmod +x entry_point.sh
EXPOSE 8080

ENTRYPOINT /entry_point.sh $BIN
