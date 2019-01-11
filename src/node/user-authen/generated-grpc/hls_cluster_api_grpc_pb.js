// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hls_cluster_api_pb = require('./hls_cluster_api_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_tv_uob_grpc_hls_cluster_Boolean(arg) {
  if (!(arg instanceof hls_cluster_api_pb.Boolean)) {
    throw new Error('Expected argument of type tv.uob.grpc.hls_cluster.Boolean');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_hls_cluster_Boolean(buffer_arg) {
  return hls_cluster_api_pb.Boolean.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_hls_cluster_RpcResult(arg) {
  if (!(arg instanceof hls_cluster_api_pb.RpcResult)) {
    throw new Error('Expected argument of type tv.uob.grpc.hls_cluster.RpcResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_hls_cluster_RpcResult(buffer_arg) {
  return hls_cluster_api_pb.RpcResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_hls_cluster_StreamId(arg) {
  if (!(arg instanceof hls_cluster_api_pb.StreamId)) {
    throw new Error('Expected argument of type tv.uob.grpc.hls_cluster.StreamId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_hls_cluster_StreamId(buffer_arg) {
  return hls_cluster_api_pb.StreamId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_hls_cluster_StreamKey(arg) {
  if (!(arg instanceof hls_cluster_api_pb.StreamKey)) {
    throw new Error('Expected argument of type tv.uob.grpc.hls_cluster.StreamKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_hls_cluster_StreamKey(buffer_arg) {
  return hls_cluster_api_pb.StreamKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_hls_cluster_TranmuxerParameters(arg) {
  if (!(arg instanceof hls_cluster_api_pb.TranmuxerParameters)) {
    throw new Error('Expected argument of type tv.uob.grpc.hls_cluster.TranmuxerParameters');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_hls_cluster_TranmuxerParameters(buffer_arg) {
  return hls_cluster_api_pb.TranmuxerParameters.deserializeBinary(new Uint8Array(buffer_arg));
}


var HlsClusterService = exports.HlsClusterService = {
  setupStream: {
    path: '/tv.uob.grpc.hls_cluster.HlsCluster/setupStream',
    requestStream: false,
    responseStream: false,
    requestType: hls_cluster_api_pb.StreamId,
    responseType: hls_cluster_api_pb.RpcResult,
    requestSerialize: serialize_tv_uob_grpc_hls_cluster_StreamId,
    requestDeserialize: deserialize_tv_uob_grpc_hls_cluster_StreamId,
    responseSerialize: serialize_tv_uob_grpc_hls_cluster_RpcResult,
    responseDeserialize: deserialize_tv_uob_grpc_hls_cluster_RpcResult,
  },
  canConnect: {
    path: '/tv.uob.grpc.hls_cluster.HlsCluster/canConnect',
    requestStream: false,
    responseStream: false,
    requestType: hls_cluster_api_pb.StreamKey,
    responseType: hls_cluster_api_pb.Boolean,
    requestSerialize: serialize_tv_uob_grpc_hls_cluster_StreamKey,
    requestDeserialize: deserialize_tv_uob_grpc_hls_cluster_StreamKey,
    responseSerialize: serialize_tv_uob_grpc_hls_cluster_Boolean,
    responseDeserialize: deserialize_tv_uob_grpc_hls_cluster_Boolean,
  },
  provisionTranmuxer: {
    path: '/tv.uob.grpc.hls_cluster.HlsCluster/provisionTranmuxer',
    requestStream: false,
    responseStream: false,
    requestType: hls_cluster_api_pb.TranmuxerParameters,
    responseType: hls_cluster_api_pb.RpcResult,
    requestSerialize: serialize_tv_uob_grpc_hls_cluster_TranmuxerParameters,
    requestDeserialize: deserialize_tv_uob_grpc_hls_cluster_TranmuxerParameters,
    responseSerialize: serialize_tv_uob_grpc_hls_cluster_RpcResult,
    responseDeserialize: deserialize_tv_uob_grpc_hls_cluster_RpcResult,
  },
  unprovisionTranmuxer: {
    path: '/tv.uob.grpc.hls_cluster.HlsCluster/unprovisionTranmuxer',
    requestStream: false,
    responseStream: false,
    requestType: hls_cluster_api_pb.StreamKey,
    responseType: hls_cluster_api_pb.RpcResult,
    requestSerialize: serialize_tv_uob_grpc_hls_cluster_StreamKey,
    requestDeserialize: deserialize_tv_uob_grpc_hls_cluster_StreamKey,
    responseSerialize: serialize_tv_uob_grpc_hls_cluster_RpcResult,
    responseDeserialize: deserialize_tv_uob_grpc_hls_cluster_RpcResult,
  },
};

exports.HlsClusterClient = grpc.makeGenericClientConstructor(HlsClusterService);
