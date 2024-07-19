FROM maven:3.9.7-eclipse-temurin-22 AS BUILD-SERVICE

ARG SERVICE

WORKDIR /usr/src/rcs/${SERVICE}
COPY ${SERVICE}/pom.xml .
COPY ${SERVICE}/src ./src
RUN mvn clean package

FROM maven:3.9.7-eclipse-temurin-22

ARG SERVICE
ENV SERVICE=${SERVICE}

COPY --from=BUILD-SERVICE /usr/src/rcs/${SERVICE}/target/fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar ./fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar

ENTRYPOINT ["sh", "-c", "java -jar ./fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar"]
