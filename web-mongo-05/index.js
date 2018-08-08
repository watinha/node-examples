let http = require('http'),
    url = require('url'),
    Usuario = require('./app/controller/Usuario');

function parseQueryString (callback) {
    return function (req, res) {
        if (req.method === "GET") {
            if (req.url)
                req.params = url.parse(req.url, true).query;
            else
                req.params = {};
            callback(req, res);
        } else {
            req.on('data', (chunk) => {
                req.params = url.parse('/enviar?' + chunk.toString('utf-8'), true).query;
                callback(req, res);
            });
        }
    }
}

http.createServer(parseQueryString((req, res) => {
    let u = new Usuario(req, res);
    if (req.url.search("/user/new") === 0) {
        u.new();
    } else if (req.url.search("/user/create") === 0) {
        u.create();
    } else if (req.url.search("/user/delete") === 0) {
        u.delete();
    } else if (req.url.search("/profissao") === 0)
        u.list('profissao');
    else if (req.url.search("/user/") === 0) {
        let id = req.url.split('/')[2];
        u.show(id);
    } else
        u.list('nome');
})).listen(3000);
