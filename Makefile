freeze-deps:
	pip freeze > 3rdparty/python/requirements.txt

proto-gen:
	python -m grpc_tools.protoc -I src/proto/ --python_out=generated/python --grpc_python_out=generated/python src/proto/*.proto

docker-clean:
	docker rm $(docker ps -a -q);
	