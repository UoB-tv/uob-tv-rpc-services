from pants.backend.python.targets.python_library import PythonLibrary
from pants.base.payload import Payload
from pants.base.payload_field import PrimitivesSetField
from pants.build_graph.target import Target


class PythonProtoBufLibrary(Target):
    default_sources_globs = '*.proto'

    def __init__(self,
                address=None,
                payload=None,
                sources=None,
                protoc_plugins=None,
                **kwargs):
        
        self.payload = payload or Payload()
        if address is not None:
            self.payload.add_field('sources',
                    self.create_sources_field(sources, address.spec_path, key_arg='sources'))
        self.payload.add_field('protoc_plugins',
            PrimitivesSetField(protoc_plugins or []))
        #super(PythonProtoBufLibrary, self).__init__(**kwargs)

    @classmethod
    def alias(cls):
        return "python_protobuf_library"

class PythonProtoBufGenLibrary(PythonLibrary):
    
    def __init__(self, **kwargs):
        super(PythonProtoBufGenLibrary, self).__init__(**kwargs)

    @classmethod
    def alias(cls):
        return "python_gen_protobuf_library"