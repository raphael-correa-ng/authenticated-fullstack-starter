## Fullstack-Starter: `auth` microservice

#### Build & run

<pre>
docker-compose up --build
</pre>

#### Notes

If Intellij doesn't find the Maven dependencies, do `File > Invalidate Caches > Invalid and restart`.

MySQL wouldn't start on Docker, solved by [this](https://stackoverflow.com/questions/77344634/azerothcore-docker-install-db-fails-with-upgrade-is-not-supported-after-a-cras).

<hr>

##### Register

<pre>
curl -X POST host:port/register -d "username=USERNAME&password=PASSWORD"
</pre>

##### Login

<pre>
curl -X POST host:port/login -d "username=USERNAME&password=PASSWORD" -c cookies
</pre>