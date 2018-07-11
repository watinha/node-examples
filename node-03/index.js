var http = require('http'),
    server;

server = http.createServer(function (req, res) {
    let l = (req.headers['accept-language'] ?
        req.headers['accept-language'].split(';') : []);

    if (l[0] && l[0].search('pt-BR') >= 0)
        res.write('Olá Mundo...');
    else
        res.write('Hello world...');
    res.end();
});

server.listen(8000);
console.log('Servidor rodando!!!');
