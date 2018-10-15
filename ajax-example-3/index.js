let express = require('express'),
    path = require('path'),
    http = require('http'),
    client = require('mongodb').MongoClient,
    app = express();

app.use(express.static(path.join(__dirname, 'static/')));

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

http.createServer(app).listen(3000);
