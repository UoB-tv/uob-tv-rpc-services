IMAGE_NAME = nginx
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION = 1-5

TAG = ${REGISTRY_URL}/${IMAGE_NAME}:${VERSION}

docker_image:
	docker build --rm -t ${TAG} .

docker_push_image: docker_image
	docker push ${TAG}
