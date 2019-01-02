# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live_streams.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='live_streams.proto',
  package='tv.uob.grpc',
  syntax='proto3',
  serialized_options=_b('\n\013tv.uob.grpcP\001'),
  serialized_pb=_b('\n\x12live_streams.proto\x12\x0btv.uob.grpc\x1a\x1fgoogle/protobuf/timestamp.proto\"n\n\x10LiveStreamStatus\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x11\n\tstreamKey\x18\x02 \x01(\t\x12\x0e\n\x06isLive\x18\x03 \x01(\x08\x12+\n\x07started\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"$\n\x16GetStreamStatusRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x32\x66\n\x11LiveStreamService\x12Q\n\tgetStatus\x12#.tv.uob.grpc.GetStreamStatusRequest\x1a\x1d.tv.uob.grpc.LiveStreamStatus\"\x00\x42\x0f\n\x0btv.uob.grpcP\x01\x62\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_LIVESTREAMSTATUS = _descriptor.Descriptor(
  name='LiveStreamStatus',
  full_name='tv.uob.grpc.LiveStreamStatus',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='tv.uob.grpc.LiveStreamStatus.id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='streamKey', full_name='tv.uob.grpc.LiveStreamStatus.streamKey', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isLive', full_name='tv.uob.grpc.LiveStreamStatus.isLive', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='started', full_name='tv.uob.grpc.LiveStreamStatus.started', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=68,
  serialized_end=178,
)


_GETSTREAMSTATUSREQUEST = _descriptor.Descriptor(
  name='GetStreamStatusRequest',
  full_name='tv.uob.grpc.GetStreamStatusRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='tv.uob.grpc.GetStreamStatusRequest.id', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=180,
  serialized_end=216,
)

_LIVESTREAMSTATUS.fields_by_name['started'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['LiveStreamStatus'] = _LIVESTREAMSTATUS
DESCRIPTOR.message_types_by_name['GetStreamStatusRequest'] = _GETSTREAMSTATUSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

LiveStreamStatus = _reflection.GeneratedProtocolMessageType('LiveStreamStatus', (_message.Message,), dict(
  DESCRIPTOR = _LIVESTREAMSTATUS,
  __module__ = 'live_streams_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.LiveStreamStatus)
  ))
_sym_db.RegisterMessage(LiveStreamStatus)

GetStreamStatusRequest = _reflection.GeneratedProtocolMessageType('GetStreamStatusRequest', (_message.Message,), dict(
  DESCRIPTOR = _GETSTREAMSTATUSREQUEST,
  __module__ = 'live_streams_pb2'
  # @@protoc_insertion_point(class_scope:tv.uob.grpc.GetStreamStatusRequest)
  ))
_sym_db.RegisterMessage(GetStreamStatusRequest)


DESCRIPTOR._options = None

_LIVESTREAMSERVICE = _descriptor.ServiceDescriptor(
  name='LiveStreamService',
  full_name='tv.uob.grpc.LiveStreamService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=218,
  serialized_end=320,
  methods=[
  _descriptor.MethodDescriptor(
    name='getStatus',
    full_name='tv.uob.grpc.LiveStreamService.getStatus',
    index=0,
    containing_service=None,
    input_type=_GETSTREAMSTATUSREQUEST,
    output_type=_LIVESTREAMSTATUS,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_LIVESTREAMSERVICE)

DESCRIPTOR.services_by_name['LiveStreamService'] = _LIVESTREAMSERVICE

# @@protoc_insertion_point(module_scope)
