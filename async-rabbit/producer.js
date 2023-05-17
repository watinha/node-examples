import amqp from 'amqplib';

const QUEUE_NAME = 'SUPIMPA';

(async () => {
  const conn = await amqp.connect('amqp://rabbitmq'),
        channel = await conn.createChannel();

  channel.sendToQueue(QUEUE_NAME, Buffer.from(process.argv.join(' ')));

  setTimeout(() => {
    conn.close();
  }, 1000);
})();
