NAME = graphql-api
VERSION = 0.1

JAR_VERSION = 1.0-SNAPSHOT

JAR_FILE = ${NAME}-${JAR_VERSION}.jar
JVM_OPTS = "-Xms192m"
REGISTRY_URL = eu.gcr.io/uob-tv-project-dev

TAG = ${REGISTRY_URL}/${NAME}:${VERSION}

build_binary:
	./gradlew jar

docker_image:
	docker build --rm -t ${TAG}  --build-arg  JAR_FILE=${JAR_FILE} --build-arg JVM_OPTS=${JVM_OPTS} .

docker_push_image: docker_image
	docker push ${TAG}

docker_run_bash: docker_image
	docker run -it ${TAG} /bin/bash