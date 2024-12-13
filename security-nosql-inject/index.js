import express from 'express';
import { MongoClient } from 'mongodb';

const app = express(),
      PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/login', async (req, res) => {
  const { login, pass } = req.body,
	conn = await MongoClient.connect('mongodb://mongodb/nosql-injection'),
	db = conn.db();

  let user = await db.collection('users').findOne({ login, pass });
  if (user) {
    res.json({ token: 'Yahoooooo!' });
  } else {
    res.json({ error: 'Invalid login or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

