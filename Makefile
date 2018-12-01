freeze_deps:
	pip freeze > 3rdparty/python/requirements.txt

proto_gen:
	python -m grpc_tools.protoc -I src/proto/ --python_out=generated/python --grpc_python_out=generated/python src/proto/health_check.proto