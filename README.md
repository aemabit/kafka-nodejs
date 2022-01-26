### DOCKER COMPOSE USAGE

- Docker up -> `docker compose up`

### DOCKER SYNTAX

- Run command inside docker container -> `--interactive` or `-it`

### KAFKA USAGE

- Create topic <TEMPLATE> -> `docker exec -it <DOCKER_NAME> kafka-console-producer.sh --broker-list kafka:<PORT> --topic <TOPIC_NAME>`

- Create topic <SAMPLE> -> `docker exec -it kafka-docker-compose-kafka-1 kafka-console-producer.sh --broker-list kafka:9092 --topic test`

- Open a bash consumer of topic <TEMPLATE> -> `docker exec -it <DOCKER_NAME> kafka-console-consumer.sh --bootstrap-server kafka:<PORT> --topic <topic-name> --from-beginning`

- Open a bash consumer of topic <SAMPLE> ->  `docker exec -it kafka-docker-compose-kafka-1 kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic test --from-beginning`

### USAGE PROJECT

- Run `node index.js`

### RESOURCE

[bitnami/kafka](https://hub.docker.com/r/bitnami/kafka/)