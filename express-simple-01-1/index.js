let express = require('express'),
    http = require('http'),
    path = require('path'),
    UserDAO = require('./app/model/Users'),
    app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/exemplo', (req, res) => {
    UserDAO.find().then((users) => {
        res.render('index', { users: users });
    });
});

http.createServer(app).listen(3000);
