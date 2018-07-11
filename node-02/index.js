var http = require('http'), server;

server = http.createServer(function (req, res) {
    console.log('chegou uma requisição!!!');
    res.write('Hello world in a server!!!');
    res.end();
});

server.listen(8000);
