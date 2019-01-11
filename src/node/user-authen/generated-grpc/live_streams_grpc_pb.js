// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var live_streams_pb = require('./live_streams_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetStreamStatusRequest(arg) {
  if (!(arg instanceof live_streams_pb.GetStreamStatusRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetStreamStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetStreamStatusRequest(buffer_arg) {
  return live_streams_pb.GetStreamStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_ListActiveLiveStreamResponse(arg) {
  if (!(arg instanceof live_streams_pb.ListActiveLiveStreamResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.ListActiveLiveStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_ListActiveLiveStreamResponse(buffer_arg) {
  return live_streams_pb.ListActiveLiveStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_LiveStreamStatus(arg) {
  if (!(arg instanceof live_streams_pb.LiveStreamStatus)) {
    throw new Error('Expected argument of type tv.uob.grpc.LiveStreamStatus');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_LiveStreamStatus(buffer_arg) {
  return live_streams_pb.LiveStreamStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateStreamStatusRequest(arg) {
  if (!(arg instanceof live_streams_pb.UpdateStreamStatusRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateStreamStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateStreamStatusRequest(buffer_arg) {
  return live_streams_pb.UpdateStreamStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateStreamStatusResponse(arg) {
  if (!(arg instanceof live_streams_pb.UpdateStreamStatusResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateStreamStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateStreamStatusResponse(buffer_arg) {
  return live_streams_pb.UpdateStreamStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LiveStreamServiceService = exports.LiveStreamServiceService = {
  getStatus: {
    path: '/tv.uob.grpc.LiveStreamService/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: live_streams_pb.GetStreamStatusRequest,
    responseType: live_streams_pb.LiveStreamStatus,
    requestSerialize: serialize_tv_uob_grpc_GetStreamStatusRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetStreamStatusRequest,
    responseSerialize: serialize_tv_uob_grpc_LiveStreamStatus,
    responseDeserialize: deserialize_tv_uob_grpc_LiveStreamStatus,
  },
  updateStatus: {
    path: '/tv.uob.grpc.LiveStreamService/updateStatus',
    requestStream: false,
    responseStream: false,
    requestType: live_streams_pb.UpdateStreamStatusRequest,
    responseType: live_streams_pb.UpdateStreamStatusResponse,
    requestSerialize: serialize_tv_uob_grpc_UpdateStreamStatusRequest,
    requestDeserialize: deserialize_tv_uob_grpc_UpdateStreamStatusRequest,
    responseSerialize: serialize_tv_uob_grpc_UpdateStreamStatusResponse,
    responseDeserialize: deserialize_tv_uob_grpc_UpdateStreamStatusResponse,
  },
  listActiveLiveStreams: {
    path: '/tv.uob.grpc.LiveStreamService/listActiveLiveStreams',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: live_streams_pb.ListActiveLiveStreamResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tv_uob_grpc_ListActiveLiveStreamResponse,
    responseDeserialize: deserialize_tv_uob_grpc_ListActiveLiveStreamResponse,
  },
};

exports.LiveStreamServiceClient = grpc.makeGenericClientConstructor(LiveStreamServiceService);
