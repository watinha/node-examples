let http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer((req, res) => {
    if (req.url.search("/enviar") === 0) {
        req.on('data', (chunk) => {
            req.params = url.parse('/enviar?' +
                    chunk.toString('utf-8'), true).query;
            console.log(req.params);
            res.write(req.method + '\n');
            res.write(req.params.alguma_coisa);
            res.end();
            return ;
        });
        return ;
    }
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    });
}).listen(3000);
