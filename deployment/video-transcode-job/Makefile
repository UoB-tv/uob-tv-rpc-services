BINARY_NAME = video-transcode-job
BINARY = ${BINARY_NAME}.pex
BINARY_PATH = "../../dist/${BINARY}"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev
VERSION = 1

TAG = ${REGISTRY_URL}/${BINARY_NAME}:${VERSION}
copy_binary:
	cp -rf ${BINARY_PATH} .

docker_image: copy_binary
	docker build --rm -t ${TAG}  --build-arg  BINARY=${BINARY} .

ffmpeg_docker_image:
	docker build --rm -t ${REGISTRY_URL}/uob-tv-ffmpeg:1

docker_push_image: docker_image
	docker push ${TAG}
