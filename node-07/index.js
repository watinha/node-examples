var http = require('http'),
    fs = require('fs'),
    server,
    webpage404 = null;

fs.readFile('static/404.html', function (err, data) {
    webpage404 = data;
});

server = http.createServer(function (req, res) {
    let file = req.url === '/' ? 'static/index.html' : './static' + req.url;
    fs.readFile(file, function (err, data) {
        if (!err) {
            res.write(data);
            res.end();
        }
        if (err && err !== null) {
            if (err.errno === -2) {
                console.log('not found... ' + err.path);
                res.write(webpage404);
                res.end();
            }
            console.log('error in file reading...');
            console.log(err);
            return ;
        }
    });
});
server.listen(8000);
