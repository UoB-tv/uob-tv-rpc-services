NAME = hls_cluster_controller
VERSION = 1-7

JAR_VERSION = 1.0-SNAPSHOT-all

JAR_FILE = ${NAME}-${JAR_VERSION}.jar
JVM_OPTS = "-Xms128m"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

build_binary:
	./gradlew shadowJar

docker_image: build_binary
	docker build --rm -t ${TAG}  --build-arg  JAR_FILE=${JAR_FILE} --build-arg JVM_OPTS=${JVM_OPTS} .

docker_push_image: docker_image
	docker push ${TAG}

docker_run_bash: docker_image
	docker run -it ${TAG} /bin/bash