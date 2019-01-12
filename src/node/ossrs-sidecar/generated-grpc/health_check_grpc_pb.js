// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var health_check_pb = require('./health_check_pb.js');

function serialize_grpc_health_v1_HealthCheckRequest(arg) {
  if (!(arg instanceof health_check_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthCheckRequest(buffer_arg) {
  return health_check_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_health_v1_HealthCheckResponse(arg) {
  if (!(arg instanceof health_check_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthCheckResponse(buffer_arg) {
  return health_check_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthService = exports.HealthService = {
  check: {
    path: '/grpc.health.v1.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_check_pb.HealthCheckRequest,
    responseType: health_check_pb.HealthCheckResponse,
    requestSerialize: serialize_grpc_health_v1_HealthCheckRequest,
    requestDeserialize: deserialize_grpc_health_v1_HealthCheckRequest,
    responseSerialize: serialize_grpc_health_v1_HealthCheckResponse,
    responseDeserialize: deserialize_grpc_health_v1_HealthCheckResponse,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
