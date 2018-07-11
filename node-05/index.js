var http = require('http'),
    fs = require('fs'),
    server;

server = http.createServer(function (req, res) {
    if (req.headers['accept'].search('text/html') >= 0) {
        fs.readFile('./static/index.html', function (err, data) {
            res.setHeader('Content-type', 'text/html');
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./static/style.css', function (err, data) {
            res.setHeader('Content-type', 'text/css');
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);
