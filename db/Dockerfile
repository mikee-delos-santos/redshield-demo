FROM postgres as db
WORKDIR /app
COPY initdb_dev.sh /docker-entrypoint-initdb.d
COPY seed_dev.sql seed_dev.sql