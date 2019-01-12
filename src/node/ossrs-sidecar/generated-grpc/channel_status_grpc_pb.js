// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var channel_status_pb = require('./channel_status_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var ChannelId_pb = require('./ChannelId_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_ChannelId(arg) {
  if (!(arg instanceof ChannelId_pb.ChannelId)) {
    throw new Error('Expected argument of type tv.uob.grpc.ChannelId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_ChannelId(buffer_arg) {
  return ChannelId_pb.ChannelId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_InitialChannelStatusData(arg) {
  if (!(arg instanceof channel_status_pb.InitialChannelStatusData)) {
    throw new Error('Expected argument of type tv.uob.grpc.InitialChannelStatusData');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_InitialChannelStatusData(buffer_arg) {
  return channel_status_pb.InitialChannelStatusData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_ListActiveLiveStreamResponse(arg) {
  if (!(arg instanceof channel_status_pb.ListActiveLiveStreamResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.ListActiveLiveStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_ListActiveLiveStreamResponse(buffer_arg) {
  return channel_status_pb.ListActiveLiveStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_LiveChannelStatus(arg) {
  if (!(arg instanceof channel_status_pb.LiveChannelStatus)) {
    throw new Error('Expected argument of type tv.uob.grpc.LiveChannelStatus');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_LiveChannelStatus(buffer_arg) {
  return channel_status_pb.LiveChannelStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateStreamStatusRequest(arg) {
  if (!(arg instanceof channel_status_pb.UpdateStreamStatusRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateStreamStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateStreamStatusRequest(buffer_arg) {
  return channel_status_pb.UpdateStreamStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateStreamStatusResponse(arg) {
  if (!(arg instanceof channel_status_pb.UpdateStreamStatusResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateStreamStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateStreamStatusResponse(buffer_arg) {
  return channel_status_pb.UpdateStreamStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChannelStatusServiceService = exports.ChannelStatusServiceService = {
  createDefaultStatus: {
    path: '/tv.uob.grpc.ChannelStatusService/createDefaultStatus',
    requestStream: false,
    responseStream: false,
    requestType: channel_status_pb.InitialChannelStatusData,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_tv_uob_grpc_InitialChannelStatusData,
    requestDeserialize: deserialize_tv_uob_grpc_InitialChannelStatusData,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getStatus: {
    path: '/tv.uob.grpc.ChannelStatusService/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: ChannelId_pb.ChannelId,
    responseType: channel_status_pb.LiveChannelStatus,
    requestSerialize: serialize_tv_uob_grpc_ChannelId,
    requestDeserialize: deserialize_tv_uob_grpc_ChannelId,
    responseSerialize: serialize_tv_uob_grpc_LiveChannelStatus,
    responseDeserialize: deserialize_tv_uob_grpc_LiveChannelStatus,
  },
  updateStatus: {
    path: '/tv.uob.grpc.ChannelStatusService/updateStatus',
    requestStream: false,
    responseStream: false,
    requestType: channel_status_pb.UpdateStreamStatusRequest,
    responseType: channel_status_pb.UpdateStreamStatusResponse,
    requestSerialize: serialize_tv_uob_grpc_UpdateStreamStatusRequest,
    requestDeserialize: deserialize_tv_uob_grpc_UpdateStreamStatusRequest,
    responseSerialize: serialize_tv_uob_grpc_UpdateStreamStatusResponse,
    responseDeserialize: deserialize_tv_uob_grpc_UpdateStreamStatusResponse,
  },
  listActiveLiveChannels: {
    path: '/tv.uob.grpc.ChannelStatusService/listActiveLiveChannels',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: channel_status_pb.ListActiveLiveStreamResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tv_uob_grpc_ListActiveLiveStreamResponse,
    responseDeserialize: deserialize_tv_uob_grpc_ListActiveLiveStreamResponse,
  },
};

exports.ChannelStatusServiceClient = grpc.makeGenericClientConstructor(ChannelStatusServiceService);
