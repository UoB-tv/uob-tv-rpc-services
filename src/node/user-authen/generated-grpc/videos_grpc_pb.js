// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var videos_pb = require('./videos_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_tv_uob_grpc_CreateVideoResponse(arg) {
  if (!(arg instanceof videos_pb.CreateVideoResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.CreateVideoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_CreateVideoResponse(buffer_arg) {
  return videos_pb.CreateVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateVideoAssetRequest(arg) {
  if (!(arg instanceof videos_pb.UpdateVideoAssetRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateVideoAssetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateVideoAssetRequest(buffer_arg) {
  return videos_pb.UpdateVideoAssetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UpdateVideoAssetResponse(arg) {
  if (!(arg instanceof videos_pb.UpdateVideoAssetResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.UpdateVideoAssetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UpdateVideoAssetResponse(buffer_arg) {
  return videos_pb.UpdateVideoAssetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_Video(arg) {
  if (!(arg instanceof videos_pb.Video)) {
    throw new Error('Expected argument of type tv.uob.grpc.Video');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Video(buffer_arg) {
  return videos_pb.Video.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_VideoId(arg) {
  if (!(arg instanceof videos_pb.VideoId)) {
    throw new Error('Expected argument of type tv.uob.grpc.VideoId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_VideoId(buffer_arg) {
  return videos_pb.VideoId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_VideoMetadatUpdateResponse(arg) {
  if (!(arg instanceof videos_pb.VideoMetadatUpdateResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.VideoMetadatUpdateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_VideoMetadatUpdateResponse(buffer_arg) {
  return videos_pb.VideoMetadatUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_VideoMetadata(arg) {
  if (!(arg instanceof videos_pb.VideoMetadata)) {
    throw new Error('Expected argument of type tv.uob.grpc.VideoMetadata');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_VideoMetadata(buffer_arg) {
  return videos_pb.VideoMetadata.deserializeBinary(new Uint8Array(buffer_arg));
}


var VideoServiceService = exports.VideoServiceService = {
  getVideoById: {
    path: '/tv.uob.grpc.VideoService/GetVideoById',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.VideoId,
    responseType: videos_pb.Video,
    requestSerialize: serialize_tv_uob_grpc_VideoId,
    requestDeserialize: deserialize_tv_uob_grpc_VideoId,
    responseSerialize: serialize_tv_uob_grpc_Video,
    responseDeserialize: deserialize_tv_uob_grpc_Video,
  },
  createVideo: {
    path: '/tv.uob.grpc.VideoService/CreateVideo',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.Video,
    responseType: videos_pb.CreateVideoResponse,
    requestSerialize: serialize_tv_uob_grpc_Video,
    requestDeserialize: deserialize_tv_uob_grpc_Video,
    responseSerialize: serialize_tv_uob_grpc_CreateVideoResponse,
    responseDeserialize: deserialize_tv_uob_grpc_CreateVideoResponse,
  },
  updateVideoAsset: {
    path: '/tv.uob.grpc.VideoService/UpdateVideoAsset',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.UpdateVideoAssetRequest,
    responseType: videos_pb.UpdateVideoAssetResponse,
    requestSerialize: serialize_tv_uob_grpc_UpdateVideoAssetRequest,
    requestDeserialize: deserialize_tv_uob_grpc_UpdateVideoAssetRequest,
    responseSerialize: serialize_tv_uob_grpc_UpdateVideoAssetResponse,
    responseDeserialize: deserialize_tv_uob_grpc_UpdateVideoAssetResponse,
  },
  updateVideoMetadata: {
    path: '/tv.uob.grpc.VideoService/UpdateVideoMetadata',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.VideoMetadata,
    responseType: videos_pb.VideoMetadatUpdateResponse,
    requestSerialize: serialize_tv_uob_grpc_VideoMetadata,
    requestDeserialize: deserialize_tv_uob_grpc_VideoMetadata,
    responseSerialize: serialize_tv_uob_grpc_VideoMetadatUpdateResponse,
    responseDeserialize: deserialize_tv_uob_grpc_VideoMetadatUpdateResponse,
  },
};

exports.VideoServiceClient = grpc.makeGenericClientConstructor(VideoServiceService);
