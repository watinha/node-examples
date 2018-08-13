let http = require('http'),
    controller = require('./app/controller/user');

http.createServer((req, res) => {
    controller.get(req, res);
}).listen(3000);
