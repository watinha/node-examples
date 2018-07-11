var http = require('http'),
    fs = require('fs'),
    server;

server = http.createServer(function (req, res) {
    let file = req.url === '/' ? 'static/index.html' : './static' + req.url;
    fs.readFile(file, function (err, data) {
        if (err && err !== null) {
            console.log('error in file reading...');
            console.log(err);
            return ;
        }
        res.write(data);
        res.end();
    });
});
server.listen(8000);
