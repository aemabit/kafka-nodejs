const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

// CONSUMER

const consumer = new kafka.Consumer(client, [{ topic: "test" }]);

consumer.on("message", (message) => {
    console.log(message);
});

// PRODUCER

const producer = new kafka.Producer(client);

producer.on("ready", () => {
	setInterval(function() {
        producer.send( [ { topic: "test", messages: "test 5 seg." } ], function (err,data) {} );
      }, 5000);
});
