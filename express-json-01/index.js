let express = require('express'),
    path = require('path'),
    http = require('http'),
    UserDAO = require('./app/model/Users'),
    app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/users', (req, res) => {
    let q = (req.query && req.query.busca) ?
                req.query.busca : '';
    UserDAO.find(q).then((users) => {
        res.json(users);
    });
});

http.createServer(app).listen(3000);
