let express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/exemplo', (req, res) => {
    let p = req.query.parametro ? req.query.parametro : '';
    res.render('index', { parametro: p });
});

http.createServer(app).listen(3000);
