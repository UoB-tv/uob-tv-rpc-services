REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION = v1
TAG = ${REGISTRY_URL}/uob-tv-python3:${VERSION}

docker_image:
	docker build --rm -t ${TAG} .

docker_push_image: docker_image
	docker push ${TAG}
