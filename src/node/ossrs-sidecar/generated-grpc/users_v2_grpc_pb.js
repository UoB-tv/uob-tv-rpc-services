// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_v2_pb = require('./users_v2_pb.js');
var ChannelId_pb = require('./ChannelId_pb.js');
var UserId_pb = require('./UserId_pb.js');

function serialize_tv_uob_grpc_Boolean(arg) {
  if (!(arg instanceof users_v2_pb.Boolean)) {
    throw new Error('Expected argument of type tv.uob.grpc.Boolean');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Boolean(buffer_arg) {
  return users_v2_pb.Boolean.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_Email(arg) {
  if (!(arg instanceof users_v2_pb.Email)) {
    throw new Error('Expected argument of type tv.uob.grpc.Email');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_Email(buffer_arg) {
  return users_v2_pb.Email.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_User(arg) {
  if (!(arg instanceof users_v2_pb.User)) {
    throw new Error('Expected argument of type tv.uob.grpc.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_User(buffer_arg) {
  return users_v2_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_tv_uob_grpc_UserInitialData(arg) {
  if (!(arg instanceof users_v2_pb.UserInitialData)) {
    throw new Error('Expected argument of type tv.uob.grpc.UserInitialData');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_UserInitialData(buffer_arg) {
  return users_v2_pb.UserInitialData.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  initializeUserAccount: {
    path: '/tv.uob.grpc.UserService/InitializeUserAccount',
    requestStream: false,
    responseStream: false,
    requestType: users_v2_pb.UserInitialData,
    responseType: users_v2_pb.User,
    requestSerialize: serialize_tv_uob_grpc_UserInitialData,
    requestDeserialize: deserialize_tv_uob_grpc_UserInitialData,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  initializeIfNotExist: {
    path: '/tv.uob.grpc.UserService/InitializeIfNotExist',
    requestStream: false,
    responseStream: false,
    requestType: users_v2_pb.UserInitialData,
    responseType: users_v2_pb.User,
    requestSerialize: serialize_tv_uob_grpc_UserInitialData,
    requestDeserialize: deserialize_tv_uob_grpc_UserInitialData,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  getUserByEmail: {
    path: '/tv.uob.grpc.UserService/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: users_v2_pb.Email,
    responseType: users_v2_pb.User,
    requestSerialize: serialize_tv_uob_grpc_Email,
    requestDeserialize: deserialize_tv_uob_grpc_Email,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  getUserById: {
    path: '/tv.uob.grpc.UserService/GetUserById',
    requestStream: false,
    responseStream: false,
    requestType: UserId_pb.UserId,
    responseType: users_v2_pb.User,
    requestSerialize: serialize_tv_uob_grpc_UserId,
    requestDeserialize: deserialize_tv_uob_grpc_UserId,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  userExists: {
    path: '/tv.uob.grpc.UserService/UserExists',
    requestStream: false,
    responseStream: false,
    requestType: users_v2_pb.Email,
    responseType: users_v2_pb.Boolean,
    requestSerialize: serialize_tv_uob_grpc_Email,
    requestDeserialize: deserialize_tv_uob_grpc_Email,
    responseSerialize: serialize_tv_uob_grpc_Boolean,
    responseDeserialize: deserialize_tv_uob_grpc_Boolean,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
