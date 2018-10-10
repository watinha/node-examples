let express = require('express'),
    http = require('http'),
    path = require('path'),
    UserDAO = require('./app/model/Users'),
    app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/a', (req, res) => {
    UserDAO.find('a').then((users) => {
        res.render('index', { users: users });
    });
});
app.get('/b', (req, res) => {
    UserDAO.find('b').then((users) => {
        res.render('index', { users: users });
    });
});
app.get('/c', (req, res) => {
    UserDAO.find('c').then((users) => {
        res.render('index', { users: users });
    });
});
app.get('/', (req, res) => { res.redirect('/a'); });

http.createServer(app).listen(3000);
