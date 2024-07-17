# Stage 1: Build the Maven project
FROM maven:3.9.7-eclipse-temurin-22 AS BUILD

# Set working directory for the build stage
WORKDIR /usr/src/rcs

# Copy only the POM file first to leverage Docker cache
COPY pom.xml .

# Copy the rest of the application source code
COPY src ./src

# Build the application using Maven
RUN mvn clean package

# Stage 2: Create a lightweight runtime environment
FROM maven:3.9.7-eclipse-temurin-22

# Set working directory for the runtime stage
WORKDIR /usr/src/rcs

# Copy the compiled JAR file from the build stage
COPY --from=BUILD /usr/src/rcs/target/fullstack-starter-1.0-SNAPSHOT.jar fullstack-starter-1.0-SNAPSHOT.jar

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "fullstack-starter-1.0-SNAPSHOT.jar"]
