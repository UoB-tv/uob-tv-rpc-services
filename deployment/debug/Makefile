NAME = debug
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION=1

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

docker_image:
	docker build --rm -t ${TAG} .

docker_push_image: docker_image
	docker push ${TAG}

