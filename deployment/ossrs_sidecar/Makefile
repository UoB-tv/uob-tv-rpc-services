NAME = ossrs_sidecar
BINARY = ${NAME}.pex

BINARY_PATH = "../../dist/${BINARY}"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
IMAGE_VERSION=1

TAG = ${REGISTRY_URL}/${NAME}:${IMAGE_VERSION}

build_binary:
	../../pants binary src/python/${NAME}:${NAME}

copy_binary: build_binary
	cp -rf ${BINARY_PATH} .

docker_image: copy_binary
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}
