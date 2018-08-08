let http = require('http'),
    Usuario = require('./app/controller/Usuario');

http.createServer((req, res) => {
    let u = new Usuario(req, res);
    if (req.url.search("/profissao") === 0)
        u.list('profissao');
    else if (req.url.search("/user/") === 0) {
        let id = req.url.split('/')[2];
        u.show(id);
    } else
        u.list('nome');
}).listen(3000);
