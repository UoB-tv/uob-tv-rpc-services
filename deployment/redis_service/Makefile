NAME = redis
BINARY = ${NAME}

REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
IMAGE_VERSION=1

TAG = ${REGISTRY_URL}/${NAME}:${IMAGE_VERSION}

docker_image:
	docker build --rm -t ${TAG} .

docker_push_image: docker_image
	docker push ${TAG}
