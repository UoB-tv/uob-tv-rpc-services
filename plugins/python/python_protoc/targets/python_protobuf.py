from pants.backend.python.targets.python_target import PythonTarget

class PythonProtoBuf(PythonTarget):
    def __init__(self, **kwargs):
        super(PythonProtoBuf, self).__init__(**kwargs)

    @classmethod
    def alias(cls):
        return "python_protobuf"