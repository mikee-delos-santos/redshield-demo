FROM postgres as db
WORKDIR /app
COPY initdb.sh /docker-entrypoint-initdb.d
COPY seed.sql seed.sql