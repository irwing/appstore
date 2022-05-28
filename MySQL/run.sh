#!/bin/bash

echo "build image"
docker build -t appstore-mysql ./MySQL/.

echo "run container"
docker run --name appstoremysql \
  -p 3306:3306 \
  -e MYSQL_DATABASE=appstore \
  -e MYSQL_ROOT_PASSWORD=appstore#2022 \
  -e MYSQL_USER=appstore \
  -e MYSQL_PASSWORD=appstore#2022 \
  -d mysql:latest

echo "load schema"
docker exec -i appstoremysql sh -c 'exec mysql -uroot -p"appstore#2022" appstore' < ./MySQL/schema.sql
