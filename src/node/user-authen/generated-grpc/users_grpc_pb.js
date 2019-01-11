// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_tv_uob_grpc_CreateUserRequest(arg) {
  if (!(arg instanceof users_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_CreateUserRequest(buffer_arg) {
  return users_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_CreateUserResponse(arg) {
  if (!(arg instanceof users_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type tv.uob.grpc.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_CreateUserResponse(buffer_arg) {
  return users_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetUserByEmailRequest(arg) {
  if (!(arg instanceof users_pb.GetUserByEmailRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetUserByEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetUserByEmailRequest(buffer_arg) {
  return users_pb.GetUserByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetUserByIdRequest(arg) {
  if (!(arg instanceof users_pb.GetUserByIdRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetUserByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetUserByIdRequest(buffer_arg) {
  return users_pb.GetUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_GetUserByUsernameRequest(arg) {
  if (!(arg instanceof users_pb.GetUserByUsernameRequest)) {
    throw new Error('Expected argument of type tv.uob.grpc.GetUserByUsernameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_GetUserByUsernameRequest(buffer_arg) {
  return users_pb.GetUserByUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tv_uob_grpc_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type tv.uob.grpc.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tv_uob_grpc_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getById: {
    path: '/tv.uob.grpc.UserService/GetById',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserByIdRequest,
    responseType: users_pb.User,
    requestSerialize: serialize_tv_uob_grpc_GetUserByIdRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetUserByIdRequest,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  getByUsername: {
    path: '/tv.uob.grpc.UserService/GetByUsername',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserByUsernameRequest,
    responseType: users_pb.User,
    requestSerialize: serialize_tv_uob_grpc_GetUserByUsernameRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetUserByUsernameRequest,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  getByEmail: {
    path: '/tv.uob.grpc.UserService/GetByEmail',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserByEmailRequest,
    responseType: users_pb.User,
    requestSerialize: serialize_tv_uob_grpc_GetUserByEmailRequest,
    requestDeserialize: deserialize_tv_uob_grpc_GetUserByEmailRequest,
    responseSerialize: serialize_tv_uob_grpc_User,
    responseDeserialize: deserialize_tv_uob_grpc_User,
  },
  createUser: {
    path: '/tv.uob.grpc.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.CreateUserRequest,
    responseType: users_pb.CreateUserResponse,
    requestSerialize: serialize_tv_uob_grpc_CreateUserRequest,
    requestDeserialize: deserialize_tv_uob_grpc_CreateUserRequest,
    responseSerialize: serialize_tv_uob_grpc_CreateUserResponse,
    responseDeserialize: deserialize_tv_uob_grpc_CreateUserResponse,
  },
  createUserIfNotExists: {
    path: '/tv.uob.grpc.UserService/CreateUserIfNotExists',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.CreateUserRequest,
    responseType: users_pb.CreateUserResponse,
    requestSerialize: serialize_tv_uob_grpc_CreateUserRequest,
    requestDeserialize: deserialize_tv_uob_grpc_CreateUserRequest,
    responseSerialize: serialize_tv_uob_grpc_CreateUserResponse,
    responseDeserialize: deserialize_tv_uob_grpc_CreateUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
