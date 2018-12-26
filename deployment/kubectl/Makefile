NAME = kubectl-container
BINARY = ${NAME}

REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=1

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

prebuild:
	./prebuild.sh

docker_image: prebuild
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}

