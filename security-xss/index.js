smport express from 'express';
import { MongoClient } from 'mongodb';

const app = express(),
      PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/comment', async (req, res) => {
  const { content } = req.body,
  	conn = await MongoClient.connect('mongodb://mongodb/xss'),
	db = conn.db();
  
  await db.collection('comments').insertOne({ content });
  res.json({ msg: 'inserted' });
  conn.close();
});

app.get('/comment', async (req, res) => {
  const conn = await MongoClient.connect('mongodb://mongodb/xss'),
	db = conn.db(),
	comments = await db.collection('comments').find().toArray();
  
  res.json(comments);
  conn.close();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
