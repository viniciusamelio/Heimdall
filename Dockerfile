FROM mariadb 
RUN -p 127.0.0.1:3306:3306  --name heimdall -e MYSQL_ROOT_PASSWORD=root -d mariadb