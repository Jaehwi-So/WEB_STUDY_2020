dockerize -wait tcp://mariadb:3306 -timeout 20s

echo "Start server"
npm start