// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var streams_pb = require('./streams_pb.js');

function serialize_tv_uob_grpc_CreateStreamForUserResponse(arg) {
  if (!(arg instanceof streams_pb.CreateStreamForUserResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.CreateStreamForUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_CreateStreamForUserResponse(buffer_arg) {
  return streams_pb.CreateStreamForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_Stream(arg) {
  if (!(arg instanceof streams_pb.Stream)) {
    throw new Error('Expected argument of type tv.uob.grpc.Stream');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Stream(buffer_arg) {
  return streams_pb.Stream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_StreamAuthenResult(arg) {
  if (!(arg instanceof streams_pb.StreamAuthenResult)) {
    throw new Error('Expected argument of type tv.uob.grpc.StreamAuthenResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_StreamAuthenResult(buffer_arg) {
  return streams_pb.StreamAuthenResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_StreamId(arg) {
  if (!(arg instanceof streams_pb.StreamId)) {
    throw new Error('Expected argument of type tv.uob.grpc.StreamId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_StreamId(buffer_arg) {
  return streams_pb.StreamId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_StreamKey(arg) {
  if (!(arg instanceof streams_pb.StreamKey)) {
    throw new Error('Expected argument of type tv.uob.grpc.StreamKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_StreamKey(buffer_arg) {
  return streams_pb.StreamKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UserId(arg) {
  if (!(arg instanceof streams_pb.UserId)) {
    throw new Error('Expected argument of type tv.uob.grpc.UserId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UserId(buffer_arg) {
  return streams_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamServiceService = exports.StreamServiceService = {
  createStreamForUser: {
    path: '/tv.uob.grpc.StreamService/CreateStreamForUser',
    requestStream: false,
    responseStream: false,
    requestType: streams_pb.UserId,
    responseType: streams_pb.CreateStreamForUserResponse,
    requestSerialize: serialize_tv_uob_grpc_UserId,
    requestDeserialize: deserialize_tv_uob_grpc_UserId,
    responseSerialize: serialize_tv_uob_grpc_CreateStreamForUserResponse,
    responseDeserialize: deserialize_tv_uob_grpc_CreateStreamForUserResponse,
  },
  getStreamForUser: {
    path: '/tv.uob.grpc.StreamService/GetStreamForUser',
    requestStream: false,
    responseStream: false,
    requestType: streams_pb.UserId,
    responseType: streams_pb.Stream,
    requestSerialize: serialize_tv_uob_grpc_UserId,
    requestDeserialize: deserialize_tv_uob_grpc_UserId,
    responseSerialize: serialize_tv_uob_grpc_Stream,
    responseDeserialize: deserialize_tv_uob_grpc_Stream,
  },
  getStreamById: {
    path: '/tv.uob.grpc.StreamService/GetStreamById',
    requestStream: false,
    responseStream: false,
    requestType: streams_pb.StreamId,
    responseType: streams_pb.Stream,
    requestSerialize: serialize_tv_uob_grpc_StreamId,
    requestDeserialize: deserialize_tv_uob_grpc_StreamId,
    responseSerialize: serialize_tv_uob_grpc_Stream,
    responseDeserialize: deserialize_tv_uob_grpc_Stream,
  },
  authenStreamToPublish: {
    path: '/tv.uob.grpc.StreamService/AuthenStreamToPublish',
    requestStream: false,
    responseStream: false,
    requestType: streams_pb.StreamKey,
    responseType: streams_pb.StreamAuthenResult,
    requestSerialize: serialize_tv_uob_grpc_StreamKey,
    requestDeserialize: deserialize_tv_uob_grpc_StreamKey,
    responseSerialize: serialize_tv_uob_grpc_StreamAuthenResult,
    responseDeserialize: deserialize_tv_uob_grpc_StreamAuthenResult,
  },
};

exports.StreamServiceClient = grpc.makeGenericClientConstructor(StreamServiceService);
