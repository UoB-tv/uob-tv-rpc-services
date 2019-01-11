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

function serialize_tv_uob_grpc_GetVideoByIdRequest(arg) {
  if (!(arg instanceof videos_pb.GetVideoByIdRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetVideoByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetVideoByIdRequest(buffer_arg) {
  return videos_pb.GetVideoByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_PublishVideoRequest(arg) {
  if (!(arg instanceof videos_pb.PublishVideoRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.PublishVideoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_PublishVideoRequest(buffer_arg) {
  return videos_pb.PublishVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_PublishVideoResponse(arg) {
  if (!(arg instanceof videos_pb.PublishVideoResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.PublishVideoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_PublishVideoResponse(buffer_arg) {
  return videos_pb.PublishVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UnpublishVideoRequest(arg) {
  if (!(arg instanceof videos_pb.UnpublishVideoRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.UnpublishVideoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UnpublishVideoRequest(buffer_arg) {
  return videos_pb.UnpublishVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_UnpublishVideoResponse(arg) {
  if (!(arg instanceof videos_pb.UnpublishVideoResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.UnpublishVideoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UnpublishVideoResponse(buffer_arg) {
  return videos_pb.UnpublishVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var VideoServiceService = exports.VideoServiceService = {
  getVideoById: {
    path: '/tv.uob.grpc.VideoService/GetVideoById',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.GetVideoByIdRequest,
    responseType: videos_pb.Video,
    requestSerialize: serialize_tv_uob_grpc_GetVideoByIdRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetVideoByIdRequest,
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
  updateVideo: {
    path: '/tv.uob.grpc.VideoService/UpdateVideo',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.UpdateVideoAssetRequest,
    responseType: videos_pb.UpdateVideoAssetResponse,
    requestSerialize: serialize_tv_uob_grpc_UpdateVideoAssetRequest,
    requestDeserialize: deserialize_tv_uob_grpc_UpdateVideoAssetRequest,
    responseSerialize: serialize_tv_uob_grpc_UpdateVideoAssetResponse,
    responseDeserialize: deserialize_tv_uob_grpc_UpdateVideoAssetResponse,
  },
  publishVideo: {
    path: '/tv.uob.grpc.VideoService/PublishVideo',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.PublishVideoRequest,
    responseType: videos_pb.PublishVideoResponse,
    requestSerialize: serialize_tv_uob_grpc_PublishVideoRequest,
    requestDeserialize: deserialize_tv_uob_grpc_PublishVideoRequest,
    responseSerialize: serialize_tv_uob_grpc_PublishVideoResponse,
    responseDeserialize: deserialize_tv_uob_grpc_PublishVideoResponse,
  },
  unpublishVideo: {
    path: '/tv.uob.grpc.VideoService/UnpublishVideo',
    requestStream: false,
    responseStream: false,
    requestType: videos_pb.UnpublishVideoRequest,
    responseType: videos_pb.UnpublishVideoResponse,
    requestSerialize: serialize_tv_uob_grpc_UnpublishVideoRequest,
    requestDeserialize: deserialize_tv_uob_grpc_UnpublishVideoRequest,
    responseSerialize: serialize_tv_uob_grpc_UnpublishVideoResponse,
    responseDeserialize: deserialize_tv_uob_grpc_UnpublishVideoResponse,
  },
};

exports.VideoServiceClient = grpc.makeGenericClientConstructor(VideoServiceService);
