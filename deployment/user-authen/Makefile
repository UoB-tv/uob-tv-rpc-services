NAME = user-authen-server
BINARY = ${NAME}.pex

BINARY_PATH = "../../dist/${BINARY}"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=1-2

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

copy_binary:
	cp -rf ${BINARY_PATH} .

docker_image: copy_binary
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}
