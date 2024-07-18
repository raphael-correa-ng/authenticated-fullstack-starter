FROM maven:3.9.7-eclipse-temurin-22 AS BUILD-AUTH-API
WORKDIR /usr/src/rcs/auth-api
COPY auth-api/pom.xml .
COPY auth-api/src ./src
RUN mvn clean package

FROM maven:3.9.7-eclipse-temurin-22 AS BUILD-SERVICE

ARG SERVICE

WORKDIR /usr/src/rcs/${SERVICE}
COPY ${SERVICE}/pom.xml .
COPY ${SERVICE}/src ./src
COPY --from=BUILD-AUTH-API /usr/src/rcs/auth-api/target/fullstack-starter-auth-api-1.0-SNAPSHOT.jar ./fullstack-starter-auth-api-1.0-SNAPSHOT.jar
RUN mvn install:install-file -Dfile=fullstack-starter-auth-api-1.0-SNAPSHOT.jar -DgroupId=com.rcs -DartifactId=fullstack-starter-auth-api -Dversion=1.0-SNAPSHOT -Dpackaging=jar
RUN mvn clean package

# Stage 2: Create a lightweight runtime environment
FROM maven:3.9.7-eclipse-temurin-22

ARG SERVICE
ENV SERVICE=${SERVICE}

COPY --from=BUILD-SERVICE /usr/src/rcs/${SERVICE}/target/fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar ./fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar

# Define the entry point script
ENTRYPOINT ["sh", "-c", "java -jar ./fullstack-starter-${SERVICE}-1.0-SNAPSHOT.jar"]
