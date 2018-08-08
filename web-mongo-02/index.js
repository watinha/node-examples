let http = require('http'),
    client = require('mongodb').MongoClient,
    Usuario = require('./lib/Usuario');

http.createServer((req, res) => {
    let u = new Usuario(client, req, res);
    if (req.url !== "/profissao")
        u.list('nome');
    else
        u.list('profissao');
}).listen(3000);
