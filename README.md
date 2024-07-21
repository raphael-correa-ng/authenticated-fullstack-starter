## Authenticated Fullstack Starter

A starter-kit for a fullstack application, featuring microservices, authentication, and integration tests - all running on Docker

<hr>

#### Tech stack

Backend: Java, SpringBoot, MySQL

Frontend: React, TypeScript, Redux

<hr>

#### Dependencies

* [Docker](https://www.docker.com/)

<hr>

#### Build & run

<pre>
./start-back.sh & ./start-front.sh
</pre>

For development, it's better to run the frontend outside Docker, in order to have live-reloading of changes:

<pre>
./start-front-dev.sh
</pre>

- Frontend: http://localhost:3000

- Auth microservice: http://localhost:8080

- My-Service microservice: http://localhost:8081

<hr>

#### Run integration tests

Auth-service:
<pre>
./run-auth-service-it-tests.sh
</pre>

<hr>

#### Other features

The Docker configurations here implement a way to use local Maven dependencies during build. 
See `back/DockerFileWithDepedency`.

In oder for this to work, the Docker files needed to be directly under `back/`, not inside each microservice, because Docker does not allow accessing files outside the working directory.

This is a valid approach, but in production, it's recommended to use a remote artifact repo, such as JFrog's Artifactory.

<hr>

#### Notes

To best work on this project on Intellij, import the `front/` and `back/*` directories as modules.

Do: 

*File > New > Module From Existing Sources...*

For each:
- `front/` (whole directory)
- `back/auth/pom.xml`
- `back/auth-api/pom.xml`
- `back/my-service/pom.xml`

Then, to access the Docker files in `back/`, you need to use the "Project Files" view. It's not perfect, but it's one way to keep the entire project in one IDE window.

<hr>

#### Upcoming work

- Upgrade to Spring Boot 3
- Upgrade to JUnit 5
- Add a web-socket service starter
