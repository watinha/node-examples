let http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer((req, res) => {
    req.params = url.parse(req.url, true).query;
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
}).listen(3000);
