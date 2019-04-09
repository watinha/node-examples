let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/p', (req, res) => {
    let nomes = ['João', 'Pedro', 'Eduardo'];
    res.render('pepino', { nomes: nomes });
});

http.createServer(app).listen(3000);
