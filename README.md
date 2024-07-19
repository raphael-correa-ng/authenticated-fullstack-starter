## Authenticated Fullstack Starter

A Kotlin/SpringBoot/MySQL microservice paired with a TypeScript/React/Redux frontend, running on Docker

Features authentication

#### Dependencies

* [Docker](https://www.docker.com/)

#### Build & run

<pre>
(cd back && docker-compose up --build) && (cd front && docker-compose up --build) 
</pre>

Frontend: http://localhost:3000

Auth microservice: http://localhost:8080

My-Service microservice: http://localhost:8081

#### Other features

The Docker configurations here implements a way to use local Maven dependencies during build. See `back/DockerFileWithDepedency`.

#### Notes

To best work on this project on Intellij, import the `front/` and `back/` directories as modules.

Do: 

*File > New > Module From Existing Sources...*

For each:
- `front/` (whole directory)
- `back/auth/pom.xml`
- `back/auth-api/pom.xml`
- `back/my-service/pom.xml`

Then, to access the Docker files in `back/`, you need to use the "Project Files" view. It's not perfect, but it's one way to keep the entire project in one IDE window.

#### TODO

- The authentication microservice is up and running on Docker; however, it's not in use yet. I need to connect it to the `my-service` microservice and to the frontend. Coming soon.
- Convert `auth` microservice and `auth-api` module to Kotlin