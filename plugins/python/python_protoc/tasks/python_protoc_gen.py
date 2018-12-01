from pants.task.simple_codegen_task import SimpleCodegenTask
from python_protoc.targets.python_protobuf_library import PythonProtoBufLibrary, PythonProtoBufGenLibrary
from pants.backend.codegen.protobuf.subsystems.protoc import Protoc
from pants.base.build_environment import get_buildroot
from pants.base.exceptions import TaskError
from pants.option.custom_types import target_option


import os

class PythonProtocGenTask(SimpleCodegenTask):
    
    def __init__(self, arg1, arg2, *args, **kwargs):
        super(SimpleCodegenTask, self).__init__(arg1, arg2)
    
    def execute(self):
        print(self.__dict__)
        print("Generating Proto stubs for python")

    @classmethod
    def register_options(cls, register):
        super(SimpleCodegenTask, cls).register_options(register)
        
        register('--import-target', type=target_option, fingerprint=True,
                help='Target that will be added as a dependency of protoc-generated Go code.')
        register('--protoc-plugins', type=list, fingerprint=True,
                help='List of protoc plugins to activate.  E.g., grpc.')
    
    @classmethod
    def product_types(cls):
        return ['python']

    def is_gentarget(self):
        return isinstance(self, PythonProtoBufLibrary)


    def synthetic_target_extra_dependencies(self, target, target_workdir):
        import_target = self.get_options().import_target
        if import_target is None:
            raise TaskError('Option import_target in scope {} must be set.'.format(self.options_scope))
        return self.context.resolve(import_target)

    def synthetic_target_type(self, target):
        return PythonProtoBufGenLibrary

    def execute_codegen(self, target, target_workdir):
        output_dir = os.path.join(target_workdir, "src", "python", "generated")
        command = "python -m grpc_tools.protoc -I src/proto/** --python_out={} --grpc_python_out={}".format(output_dir, output_dir)
