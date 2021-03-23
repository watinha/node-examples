let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    cache = require('express-redis-cache'),
    users = require('./model/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

cache = cache({
  prefix: 'redis-test',
  host: 'redis',
  port: 6379
});

cache.invalidate = (name) => {
  return (req, res, next) => {
    const route_name = name ? name : req.url;
    if (!cache.connected) {
      next();
      return ;
    }
    cache.del(route_name, (err) => console.log(err));
    next();
  };
};

app.get('/user', cache.route(), async (req, res) => {
  console.log('/user -> consultando banco...');
  res.json(await users.find());
});

app.get('/user/:id', cache.route(), async (req, res) => {
  console.log(`/user/${req.params.id} -> consultando banco...`);
  res.json(await users.find(req.params.id));
});

app.post('/user', cache.invalidate(), async (req, res) => {
  console.log('/user -> escrevendo no banco...');
  const user = new users(req.body);
  await user.save();
  res.json({ message: 'sucesso' });
});

app.delete('/user/:id', cache.invalidate('/user'), async (req, res) => {
  console.log(`/user/${req.params.id} -> escrevendo no banco...`);
  await users.delete(req.params.id);
  res.json({ message: 'sucesso' });
});

app.put('/user/:id', cache.invalidate('/user'), async (req, res) => {
  console.log(`/user/${req.params.id} -> escrevendo no banco...`);
  const user = new users(req.body);
  await user.save();
  res.json({ message: 'sucesso' });
});

app.listen(3000);
