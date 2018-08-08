let http = require('http'),
    url = require('url'),
    fs = require('fs');

function parseQueryString (callback) {
    return function (req, res) {
        if (req.method === "GET") {
            req.params = url.parse(req.url, true).query;
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
    if (req.url.search("/enviar") === 0) {
        console.log(req.params);
        res.write(req.method + '\n');
        res.write(req.params.alguma_coisa);
        res.end();
        return ;
    }
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    });
})).listen(3000);
