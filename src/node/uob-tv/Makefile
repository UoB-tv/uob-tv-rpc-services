NAME = uob-tv-web
BINARY = ${NAME}

REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=0.5

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

docker_image:
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

docker_push_image: docker_image
	docker push ${TAG}
