let express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/mensagem_get', (req, res) => {
    let msg = req.body.mensagem;
    console.log(msg);
    res.end();
});

http.createServer(app).listen(3000);
