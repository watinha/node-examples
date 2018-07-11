var http = require('http'),
    fs = require('fs'),
    server;

server = http.createServer(function (req, res) {
    fs.readFile('./static/index.html', function (err, data) {
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
    });
});

server.listen(8000);
