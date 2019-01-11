// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var channels_pb = require('./channels_pb.js');

function serialize_tv_uob_grpc_Channel(arg) {
  if (!(arg instanceof channels_pb.Channel)) {
    throw new Error('Expected argument of type tv.uob.grpc.Channel');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Channel(buffer_arg) {
  return channels_pb.Channel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetChannelByIdRequest(arg) {
  if (!(arg instanceof channels_pb.GetChannelByIdRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetChannelByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetChannelByIdRequest(buffer_arg) {
  return channels_pb.GetChannelByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetChannelForUserRequest(arg) {
  if (!(arg instanceof channels_pb.GetChannelForUserRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetChannelForUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetChannelForUserRequest(buffer_arg) {
  return channels_pb.GetChannelForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChannelServiceService = exports.ChannelServiceService = {
  getChannelById: {
    path: '/tv.uob.grpc.ChannelService/GetChannelById',
    requestStream: false,
    responseStream: false,
    requestType: channels_pb.GetChannelByIdRequest,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_GetChannelByIdRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetChannelByIdRequest,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
  getChannelForUser: {
    path: '/tv.uob.grpc.ChannelService/GetChannelForUser',
    requestStream: false,
    responseStream: false,
    requestType: channels_pb.GetChannelForUserRequest,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_GetChannelForUserRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetChannelForUserRequest,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
};

exports.ChannelServiceClient = grpc.makeGenericClientConstructor(ChannelServiceService);
