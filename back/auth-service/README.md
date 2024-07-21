## Fullstack-Starter: `auth` microservice

#### Build & run

<pre>
docker-compose up --build
</pre>

<hr>

##### Register

<pre>
curl -X POST host:port/register -d "username=USERNAME&password=PASSWORD"
</pre>

##### Login

<pre>
curl -X POST host:port/login -d "username=USERNAME&password=PASSWORD" -c cookies
</pre>