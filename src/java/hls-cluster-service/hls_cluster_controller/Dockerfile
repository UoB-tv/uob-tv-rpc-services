FROM openjdk:8-jre-alpine

ARG JAR_FILE
ARG JVM_OPTS

ENV ENV_JAR_FILE=$JAR_FILE
ENV ENV_JVM_OPTS=$JVM_OPTS



COPY build/libs/$JAR_FILE /
COPY entry_point.sh /

EXPOSE 8080

ENTRYPOINT /entry_point.sh $ENV_JVM_OPTS $ENV_JAR_FILE


COPY build/libs/hls_cluster_controller-1.0-SNAPSHOT-all.jar /