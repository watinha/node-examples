let http = require('http'),
    fs = require('fs'),
    Mustache = require('mustache'),
    client = require('mongodb').MongoClient;

http.createServer((req, res) => {
    client.connect('mongodb://localhost:27017/mongo-test',
                   {useNewUrlParser: true}, (err, client) => {
        if (err) throw err;
        let db = client.db('mongo-test');
        db.collection('users').find().sort({nome: 1})
          .toArray((err, users) => {
            if (err) throw err;
            fs.readFile('app/view/usuario.mustache.html',
                        'utf-8', (err, template) => {
                if (err) throw err;
                res.write(Mustache.render(template, {users: users}));
                res.end();
            });
        });
    });
}).listen(3000);
