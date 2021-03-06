# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: users_v2.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import ChannelId_pb2 as ChannelId__pb2
import UserId_pb2 as UserId__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='users_v2.proto',
  package='tv.uob.grpc',
  syntax='proto3',
  serialized_options=_b('\n\013tv.uob.grpcP\001'),
  serialized_pb=_b('\n\x0eusers_v2.proto\x12\x0btv.uob.grpc\x1a\x0f\x43hannelId.proto\x1a\x0cUserId.proto\"\xae\x01\n\x04User\x12\x0e\n\x06userId\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\t\x12%\n\x07profile\x18\x04 \x01(\x0b\x32\x14.tv.uob.grpc.Profile\x12%\n\x06stream\x18\x05 \x01(\x0b\x32\x15.tv.uob.grpc.StreamId\x12\'\n\x07\x63hannel\x18\x06 \x01(\x0b\x32\x16.tv.uob.grpc.ChannelId\")\n\x08StreamId\x12\n\n\x02id\x18\x01 \x01(\x03\x12\x11\n\tstreamKey\x18\x02 \x01(\t\"\x1c\n\x07Profile\x12\x11\n\tavatarURL\x18\x01 \x01(\t\"@\n\x0fUserInitialData\x12\x17\n\x0fgoogleUserEmail\x18\x01 \x01(\t\x12\x14\n\x0cgoogleUserId\x18\x02 \x01(\t\"\x16\n\x05\x45mail\x12\r\n\x05value\x18\x01 \x01(\t\"\x18\n\x07\x42oolean\x12\r\n\x05value\x18\x01 \x01(\x08\x32\xd2\x02\n\x0bUserService\x12J\n\x15InitializeUserAccount\x12\x1c.tv.uob.grpc.UserInitialData\x1a\x11.tv.uob.grpc.User\"\x00\x12I\n\x14InitializeIfNotExist\x12\x1c.tv.uob.grpc.UserInitialData\x1a\x11.tv.uob.grpc.User\"\x00\x12\x39\n\x0eGetUserByEmail\x12\x12.tv.uob.grpc.Email\x1a\x11.tv.uob.grpc.User\"\x00\x12\x37\n\x0bGetUserById\x12\x13.tv.uob.grpc.UserId\x1a\x11.tv.uob.grpc.User\"\x00\x12\x38\n\nUserExists\x12\x12.tv.uob.grpc.Email\x1a\x14.tv.uob.grpc.Boolean\"\x00\x42\x0f\n\x0btv.uob.grpcP\x01\x62\x06proto3')
  ,
  dependencies=[ChannelId__pb2.DESCRIPTOR,UserId__pb2.DESCRIPTOR,])




_USER = _descriptor.Descriptor(
  name='User',
  full_name='tv.uob.grpc.User',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='userId', full_name='tv.uob.grpc.User.userId', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='username', full_name='tv.uob.grpc.User.username', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='email', full_name='tv.uob.grpc.User.email', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='profile', full_name='tv.uob.grpc.User.profile', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='stream', full_name='tv.uob.grpc.User.stream', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='channel', full_name='tv.uob.grpc.User.channel', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=63,
  serialized_end=237,
)


_STREAMID = _descriptor.Descriptor(
  name='StreamId',
  full_name='tv.uob.grpc.StreamId',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='tv.uob.grpc.StreamId.id', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='streamKey', full_name='tv.uob.grpc.StreamId.streamKey', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=239,
  serialized_end=280,
)


_PROFILE = _descriptor.Descriptor(
  name='Profile',
  full_name='tv.uob.grpc.Profile',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='avatarURL', full_name='tv.uob.grpc.Profile.avatarURL', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=282,
  serialized_end=310,
)


_USERINITIALDATA = _descriptor.Descriptor(
  name='UserInitialData',
  full_name='tv.uob.grpc.UserInitialData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='googleUserEmail', full_name='tv.uob.grpc.UserInitialData.googleUserEmail', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='googleUserId', full_name='tv.uob.grpc.UserInitialData.googleUserId', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=312,
  serialized_end=376,
)


_EMAIL = _descriptor.Descriptor(
  name='Email',
  full_name='tv.uob.grpc.Email',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tv.uob.grpc.Email.value', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=378,
  serialized_end=400,
)


_BOOLEAN = _descriptor.Descriptor(
  name='Boolean',
  full_name='tv.uob.grpc.Boolean',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tv.uob.grpc.Boolean.value', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=402,
  serialized_end=426,
)

_USER.fields_by_name['profile'].message_type = _PROFILE
_USER.fields_by_name['stream'].message_type = _STREAMID
_USER.fields_by_name['channel'].message_type = ChannelId__pb2._CHANNELID
DESCRIPTOR.message_types_by_name['User'] = _USER
DESCRIPTOR.message_types_by_name['StreamId'] = _STREAMID
DESCRIPTOR.message_types_by_name['Profile'] = _PROFILE
DESCRIPTOR.message_types_by_name['UserInitialData'] = _USERINITIALDATA
DESCRIPTOR.message_types_by_name['Email'] = _EMAIL
DESCRIPTOR.message_types_by_name['Boolean'] = _BOOLEAN
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

User = _reflection.GeneratedProtocolMessageType('User', (_message.Message,), dict(
  DESCRIPTOR = _USER,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.User)
  ))
_sym_db.RegisterMessage(User)

StreamId = _reflection.GeneratedProtocolMessageType('StreamId', (_message.Message,), dict(
  DESCRIPTOR = _STREAMID,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.StreamId)
  ))
_sym_db.RegisterMessage(StreamId)

Profile = _reflection.GeneratedProtocolMessageType('Profile', (_message.Message,), dict(
  DESCRIPTOR = _PROFILE,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.Profile)
  ))
_sym_db.RegisterMessage(Profile)

UserInitialData = _reflection.GeneratedProtocolMessageType('UserInitialData', (_message.Message,), dict(
  DESCRIPTOR = _USERINITIALDATA,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.UserInitialData)
  ))
_sym_db.RegisterMessage(UserInitialData)

Email = _reflection.GeneratedProtocolMessageType('Email', (_message.Message,), dict(
  DESCRIPTOR = _EMAIL,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.Email)
  ))
_sym_db.RegisterMessage(Email)

Boolean = _reflection.GeneratedProtocolMessageType('Boolean', (_message.Message,), dict(
  DESCRIPTOR = _BOOLEAN,
  __module__ = 'users_v2_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.Boolean)
  ))
_sym_db.RegisterMessage(Boolean)


DESCRIPTOR._options = None

_USERSERVICE = _descriptor.ServiceDescriptor(
  name='UserService',
  full_name='tv.uob.grpc.UserService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=429,
  serialized_end=767,
  methods=[
  _descriptor.MethodDescriptor(
    name='InitializeUserAccount',
    full_name='tv.uob.grpc.UserService.InitializeUserAccount',
    index=0,
    containing_service=None,
    input_type=_USERINITIALDATA,
    output_type=_USER,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='InitializeIfNotExist',
    full_name='tv.uob.grpc.UserService.InitializeIfNotExist',
    index=1,
    containing_service=None,
    input_type=_USERINITIALDATA,
    output_type=_USER,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetUserByEmail',
    full_name='tv.uob.grpc.UserService.GetUserByEmail',
    index=2,
    containing_service=None,
    input_type=_EMAIL,
    output_type=_USER,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetUserById',
    full_name='tv.uob.grpc.UserService.GetUserById',
    index=3,
    containing_service=None,
    input_type=UserId__pb2._USERID,
    output_type=_USER,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UserExists',
    full_name='tv.uob.grpc.UserService.UserExists',
    index=4,
    containing_service=None,
    input_type=_EMAIL,
    output_type=_BOOLEAN,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_USERSERVICE)

DESCRIPTOR.services_by_name['UserService'] = _USERSERVICE

# @@protoc_insertion_point(module_scope)
