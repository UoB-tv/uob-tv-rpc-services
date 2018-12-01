from pants.backend.python.targets.python_target import PythonTarget
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

class PythonProtoBufGenLibrary(PythonTarget):
    
    def __init__(self, sources=None, address=None, payload=None, **kwargs):
        payload = payload or Payload()
        payload.add_fields({
            'sources': self.create_sources_field(sources=sources,
                                               sources_rel_path=address.spec_path,
                                               key_arg='sources'),
        })
        super(PythonProtoBufGenLibrary, self).__init__(**kwargs)
