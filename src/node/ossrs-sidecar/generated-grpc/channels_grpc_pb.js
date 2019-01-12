// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var channels_pb = require('./channels_pb.js');
var ChannelId_pb = require('./ChannelId_pb.js');
var UserId_pb = require('./UserId_pb.js');

function serialize_tv_uob_grpc_Channel(arg) {
  if (!(arg instanceof channels_pb.Channel)) {
    throw new Error('Expected argument of type tv.uob.grpc.Channel');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Channel(buffer_arg) {
  return channels_pb.Channel.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_tv_uob_grpc_InitialChannelData(arg) {
  if (!(arg instanceof channels_pb.InitialChannelData)) {
    throw new Error('Expected argument of type tv.uob.grpc.InitialChannelData');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_InitialChannelData(buffer_arg) {
  return channels_pb.InitialChannelData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UserId(arg) {
  if (!(arg instanceof UserId_pb.UserId)) {
    throw new Error('Expected argument of type tv.uob.grpc.UserId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UserId(buffer_arg) {
  return UserId_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChannelServiceService = exports.ChannelServiceService = {
  initializeChannel: {
    path: '/tv.uob.grpc.ChannelService/InitializeChannel',
    requestStream: false,
    responseStream: false,
    requestType: channels_pb.InitialChannelData,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_InitialChannelData,
    requestDeserialize: deserialize_tv_uob_grpc_InitialChannelData,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
  getChannelById: {
    path: '/tv.uob.grpc.ChannelService/GetChannelById',
    requestStream: false,
    responseStream: false,
    requestType: ChannelId_pb.ChannelId,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_ChannelId,
    requestDeserialize: deserialize_tv_uob_grpc_ChannelId,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
  getChannelForUser: {
    path: '/tv.uob.grpc.ChannelService/GetChannelForUser',
    requestStream: false,
    responseStream: false,
    requestType: UserId_pb.UserId,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_UserId,
    requestDeserialize: deserialize_tv_uob_grpc_UserId,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
  updateChannel: {
    path: '/tv.uob.grpc.ChannelService/UpdateChannel',
    requestStream: false,
    responseStream: false,
    requestType: channels_pb.Channel,
    responseType: channels_pb.Channel,
    requestSerialize: serialize_tv_uob_grpc_Channel,
    requestDeserialize: deserialize_tv_uob_grpc_Channel,
    responseSerialize: serialize_tv_uob_grpc_Channel,
    responseDeserialize: deserialize_tv_uob_grpc_Channel,
  },
};

exports.ChannelServiceClient = grpc.makeGenericClientConstructor(ChannelServiceService);
