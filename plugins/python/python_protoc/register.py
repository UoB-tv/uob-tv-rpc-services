from pants.goal.goal import Goal
from pants.goal.task_registrar import TaskRegistrar as task
from python_protoc.tasks.python_protoc_gen import PythonProtocGenTask
from pants.build_graph.build_file_aliases import BuildFileAliases

from python_protoc.targets.python_protobuf import PythonProtoBuf
from python_protoc.targets.python_protobuf_library import PythonProtoBufLibrary

def build_file_aliases():
    return BuildFileAliases(
        targets={
            PythonProtoBuf.alias() : PythonProtoBuf,
            PythonProtoBufLibrary.alias() : PythonProtoBufLibrary,
        }    
    )

def register_goals():
    Goal.register(name="python-protoc", description="Generate Python stubs for proto files in project")
    task(name="python-protoc-gen", action=PythonProtocGenTask).install('python-protoc')
