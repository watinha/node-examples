import amqp from 'amqplib';

const QUEUE_NAME = 'SUPIMPA';

(async () => {
  const conn = await amqp.connect('amqp://rabbitmq'),
        channel = await conn.createChannel();

  channel.consume(QUEUE_NAME, (msg) => {
    console.log(msg.content.toString());
    channel.ack(msg);
  });
})();



