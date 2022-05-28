FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=appstore#2022
ENV MYSQL_DATABASE=test
ENV MYSQL_USER=appstore
ENV MYSQL_PASSWORD=appstore#2022

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
