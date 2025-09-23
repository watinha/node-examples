import { MongoClient } from 'mongodb';

(async () => {
  const conn = await MongoClient.connect('mongodb://mongodb/nosql-injection'),
	db = conn.db();

  await db.collection('users').insertOne({ login: 'admin', pass: 'super secret!!!' });
  console.log('User has been inserted');
  conn.close();
})();
