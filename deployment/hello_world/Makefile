BINARY = hello-world-server.pex
BINARY_PATH = "../../dist/${BINARY}"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=1

copy_binary:
	cp -rf ${BINARY_PATH} .

docker_image: copy_binary
	docker build --rm -t ${REGISTRY_URL}/hello-world-server:${VERSION}  --build-arg  BINARY=${BINARY} .
