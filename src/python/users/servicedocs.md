# Users Service

## Functionality
Provides endpoints to create/query users in Uob-TV website.

## Service Definitions:
See `src/proto/users.proto`

## Service Dependencies
* Internal: None
* External: Google Cloud Datastore

## Networking
* protocol: gRPC
* port: 6000

## Configuration

* environment variable `GOOGLE_APPLICATION_CREDENTIALS` which points to location of a service account credentials file.
* Uob backend service account.

## External Docs
Google Cloud Datastore
https://googleapis.github.io/google-cloud-python/latest/datastore/index.html


https://cloud.google.com/datastore/docs/concepts/entities

