let http = require('http'),
  path = require('path'),
  express = require('express'),
  app = express(),
  users = require('./model/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/user', async (req, res) => {
  res.json(await users.find());
});

app.get('/user/:id', async (req, res) => {
  res.json(await users.find(req.params.id));
});

app.post('/user', async (req, res) => {
  const user = new users(req.body);
  await user.save();
  res.json({ message: 'sucesso' });
});

app.delete('/user/:id', async (req, res) => {
  await users.delete(req.params.id);
  res.json({ message: 'sucesso' });
});

app.put('/user/:id', async (req, res) => {
  const user = new users(req.body);
  await user.save();
  res.json({ message: 'sucesso' });
});

app.listen(3000);
