# OSSRS Sidecar Container

## Functionality
This container is meant to be run alongside `ossrs` in the same pod, i.e. a sidecar container to handle various request such as RTMP stream authentication, publish and unpublish of streams.

## Service Definitions:




## Service Dependencies
* Internal: `streams`, `live-stream`
* External: `Google PubSub`.

## Networking
* protocol: HTTP, gRPC
* port: accepts HTTP on 30150.

## Configuration

* Optional environment variable: GRPC_PORT, defaults to 6000

## External Docs
Definition of OSSRS HTTP callback payloads is here:
https://github.com/ossrs/srs/wiki/v2_EN_HTTPCallback

