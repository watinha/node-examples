const http = require('http'),
      path = require('path'),
      express = require('express'),
      jwt = require('jsonwebtoken'),
      jwt_middleware = require('express-jwt'),
      app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  if (login === 'watinha' && password === 'nossa_legal') {
    const token = jwt.sign({
      login: 'watinha',
      feature: ['nice guy', 'likes JS']
    }, 'segredo...');
    res.json({ token: token });
  }
  else {
    res.status(403).json({ message: 'You shall not pass!!!' })
  }
});

app.get('/data', jwt_middleware({ secret: 'segredo...', algorithms: ['HS256']}), (req, res) => {
  res.json({ message: `super dados secretos de ${req.user.login} - ${req.user.feature}` });
});

app.listen(3000);

