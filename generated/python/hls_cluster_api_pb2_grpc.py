# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import hls_cluster_api_pb2 as hls__cluster__api__pb2


class HlsClusterStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.canConnect = channel.unary_unary(
        '/tv.uob.grpc.hls_cluster.HlsCluster/canConnect',
        request_serializer=hls__cluster__api__pb2.StreamKey.SerializeToString,
        response_deserializer=hls__cluster__api__pb2.Boolean.FromString,
        )


class HlsClusterServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def canConnect(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_HlsClusterServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'canConnect': grpc.unary_unary_rpc_method_handler(
          servicer.canConnect,
          request_deserializer=hls__cluster__api__pb2.StreamKey.FromString,
          response_serializer=hls__cluster__api__pb2.Boolean.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'tv.uob.grpc.hls_cluster.HlsCluster', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
