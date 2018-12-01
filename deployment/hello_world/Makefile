BINARY = hello-world-server.pex
BINARY_PATH = "../../dist/${BINARY}"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=1

TAG = ${REGISTRY_URL}/hello-world-server:${VERSION}
copy_binary:
	cp -rf ${BINARY_PATH} .

docker_image: copy_binary
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}

