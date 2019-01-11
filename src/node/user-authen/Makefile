NAME = uob-tv-web
BINARY = ${NAME}

REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=0.2

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

docker_image:
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}


gen-proto-js:
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated-grpc --grpc_out=./generated-grpc --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` --proto_path=../../proto ../../proto/*.proto
