FROM python:3.7.1-slim

RUN apt-get update -y && apt-get install -y libssl-dev libffi-dev && apt-get clean autoclean && apt-get autoremove --yes && rm -rf /var/lib/{apt,dpkg,cache,log}