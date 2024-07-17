## Fullstack-Starter

#### Dependencies

* [Docker](https://www.docker.com/)

#### Build & run

<pre>
(cd back && docker-compose up --build) && (cd front && docker-compose up --build) 
</pre>

Frontend: http://localhost:3000

Backend: http://localhost:8080

#### Notes

To best work on this project on Intellij, import `back/` and `front/` as modules:

- File > New > Module From Existing Sources... > select `back/pom.xml`
- File > New > Module From Existing Sources... > select `front/` directory