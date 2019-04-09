let http = require('http'),
    express = require('express'),
    path = require('path'),
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/a', (req, res) => {
    res.render('abobrinha');
});

app.get('/p', (req, res) => {
    let nomes = ['Abacate', 'Abacaxi', 'Mamão'];
    res.render('pepino', { nomes: nomes })
});

http.createServer(app).listen(3000);
