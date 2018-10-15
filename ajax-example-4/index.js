let express = require('express'),
    path = require('path'),
    http = require('http'),
    client = require('mongodb').MongoClient,
    body_parser = require('body-parser'),
    app = express();

app.use(express.static(path.join(__dirname, 'static/')));
app.use(body_parser.urlencoded({ extended: false }));

app.get('/usuarios', (req, res) => {
    client.connect('mongodb://localhost:27017/mongo-test',
            {useNewUrlParser:true}).then((conn) => {
        let db = conn.db('mongo-test');
        return db.collection('users').find().sort({nome: 1}).toArray();
    }).then((users) => {
        res.end('<li>' + users.map((user) => {
            return user.nome;
        }).join('</li><li>') + '</li>');
    });
});

app.post('/usuarios', (req, res) => {
    let parameter = req.body.nome;
    client.connect('mongodb://localhost:27017/mongo-test',
            {useNewUrlParser:true}).then((conn) => {
        let db = conn.db('mongo-test');
        return db.collection('users').insertOne({nome: parameter});
    }).then((status) => {
        res.end();
    });
});

http.createServer(app).listen(3000);
