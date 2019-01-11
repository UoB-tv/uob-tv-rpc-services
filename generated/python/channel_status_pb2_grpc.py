# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import ChannelId_pb2 as ChannelId__pb2
import channel_status_pb2 as channel__status__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class ChannelStatusServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.createDefaultStatus = channel.unary_unary(
        '/tv.uob.grpc.ChannelStatusService/createDefaultStatus',
        request_serializer=channel__status__pb2.InitialChannelStatusData.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.getStatus = channel.unary_unary(
        '/tv.uob.grpc.ChannelStatusService/getStatus',
        request_serializer=ChannelId__pb2.ChannelId.SerializeToString,
        response_deserializer=channel__status__pb2.LiveChannelStatus.FromString,
        )
    self.updateStatus = channel.unary_unary(
        '/tv.uob.grpc.ChannelStatusService/updateStatus',
        request_serializer=channel__status__pb2.UpdateStreamStatusRequest.SerializeToString,
        response_deserializer=channel__status__pb2.UpdateStreamStatusResponse.FromString,
        )
    self.listActiveLiveChannels = channel.unary_unary(
        '/tv.uob.grpc.ChannelStatusService/listActiveLiveChannels',
        request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
        response_deserializer=channel__status__pb2.ListActiveLiveStreamResponse.FromString,
        )


class ChannelStatusServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def createDefaultStatus(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def getStatus(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def updateStatus(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def listActiveLiveChannels(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_ChannelStatusServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'createDefaultStatus': grpc.unary_unary_rpc_method_handler(
          servicer.createDefaultStatus,
          request_deserializer=channel__status__pb2.InitialChannelStatusData.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'getStatus': grpc.unary_unary_rpc_method_handler(
          servicer.getStatus,
          request_deserializer=ChannelId__pb2.ChannelId.FromString,
          response_serializer=channel__status__pb2.LiveChannelStatus.SerializeToString,
      ),
      'updateStatus': grpc.unary_unary_rpc_method_handler(
          servicer.updateStatus,
          request_deserializer=channel__status__pb2.UpdateStreamStatusRequest.FromString,
          response_serializer=channel__status__pb2.UpdateStreamStatusResponse.SerializeToString,
      ),
      'listActiveLiveChannels': grpc.unary_unary_rpc_method_handler(
          servicer.listActiveLiveChannels,
          request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
          response_serializer=channel__status__pb2.ListActiveLiveStreamResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'tv.uob.grpc.ChannelStatusService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
