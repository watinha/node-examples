let http = require('http');

http.createServer((req, res) => {
    let url = req.url;
    switch (url) {
        case "/usuario":
            res.write('Página de usuários');
            break;
        case "/posts":
            res.write('Página de posts');
            break;
        case "/login":
            res.write('Página de login');
            break;
        default:
            res.write('XXX');
            break;
    }
    res.end();
}).listen(3000);
