import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let messages = [];

app.get('/message', (req, res) => {
  console.log('retrieving messages');

  res.json(messages);
});

app.post('/message', (req, res) => {
  console.log('receiving messages');

  const { msg } = req.body;
  res.status(200).json({ msg: 'OK'});
});

app.listen(3000);
