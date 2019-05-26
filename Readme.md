# Start der API server unter OSX:

# config server

```
cd /Users/jp/Documents/SWE/microservices/config && java -jar build/libs/config-1.0.jar --spring.profiles.active=dev --Dspring.config.location=classpath:/application.yml
```

# Zookeeper & Kafka

```
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties & kafka-server-start /usr/local/etc/kafka/server.properties
```

# kunde rest api server

```
cd /Users/jp/Documents/SWE/microservices/kunde/ && java -jar build/libs/kunde-1.0.jar --spring.profiles.active=dev
```
