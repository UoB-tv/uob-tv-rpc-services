# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import videos_pb2 as videos__pb2


class VideoServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.GetVideoById = channel.unary_unary(
        '/tv.uob.grpc.VideoService/GetVideoById',
        request_serializer=videos__pb2.VideoId.SerializeToString,
        response_deserializer=videos__pb2.Video.FromString,
        )
    self.listVideos = channel.unary_unary(
        '/tv.uob.grpc.VideoService/listVideos',
        request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
        response_deserializer=videos__pb2.VideoList.FromString,
        )
    self.CreateVideo = channel.unary_unary(
        '/tv.uob.grpc.VideoService/CreateVideo',
        request_serializer=videos__pb2.Video.SerializeToString,
        response_deserializer=videos__pb2.CreateVideoResponse.FromString,
        )
    self.UpdateVideoAsset = channel.unary_unary(
        '/tv.uob.grpc.VideoService/UpdateVideoAsset',
        request_serializer=videos__pb2.UpdateVideoAssetRequest.SerializeToString,
        response_deserializer=videos__pb2.UpdateVideoAssetResponse.FromString,
        )
    self.UpdateVideoMetadata = channel.unary_unary(
        '/tv.uob.grpc.VideoService/UpdateVideoMetadata',
        request_serializer=videos__pb2.VideoMetadata.SerializeToString,
        response_deserializer=videos__pb2.VideoMetadatUpdateResponse.FromString,
        )


class VideoServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def GetVideoById(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def listVideos(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateVideo(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateVideoAsset(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateVideoMetadata(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_VideoServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'GetVideoById': grpc.unary_unary_rpc_method_handler(
          servicer.GetVideoById,
          request_deserializer=videos__pb2.VideoId.FromString,
          response_serializer=videos__pb2.Video.SerializeToString,
      ),
      'listVideos': grpc.unary_unary_rpc_method_handler(
          servicer.listVideos,
          request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
          response_serializer=videos__pb2.VideoList.SerializeToString,
      ),
      'CreateVideo': grpc.unary_unary_rpc_method_handler(
          servicer.CreateVideo,
          request_deserializer=videos__pb2.Video.FromString,
          response_serializer=videos__pb2.CreateVideoResponse.SerializeToString,
      ),
      'UpdateVideoAsset': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateVideoAsset,
          request_deserializer=videos__pb2.UpdateVideoAssetRequest.FromString,
          response_serializer=videos__pb2.UpdateVideoAssetResponse.SerializeToString,
      ),
      'UpdateVideoMetadata': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateVideoMetadata,
          request_deserializer=videos__pb2.VideoMetadata.FromString,
          response_serializer=videos__pb2.VideoMetadatUpdateResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'tv.uob.grpc.VideoService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
