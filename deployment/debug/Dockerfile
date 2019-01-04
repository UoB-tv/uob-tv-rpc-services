FROM ubuntu:18.04

COPY start.sh /

RUN apt-get update -y && apt-get install -y curl wget net-tools python3-dev && chmod +x /start.sh

EXPOSE 80
EXPOSE 6000
EXPOSE 8080
EXPOSE 1938
EXPOSE 1935

CMD /start.sh
