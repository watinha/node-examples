var http = require('http'),
    fs = require('fs'),
    server;

server = http.createServer(function (req, res) {
    let file = req.url === '/' ? 'static/index.html' : './static' + req.url;
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log('error in file reading...');
            return ;
        }
        res.write(data);
        res.end();
    });
});
server.listen(8000);
