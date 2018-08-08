let http = require('http'),
    client = require('mongodb').MongoClient;

http.createServer((req, res) => {
    client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}, (err, client) => {
        if (err) {
            console.log(err);
            return ;
        }
        let db = client.db('mongo-test'),
            html_1 = `
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Index</title>
    </head>
    <body>
        <h1>Lista de usuários</h1>`;
            let html_3 = `
    </body>
</html>`;
        db.collection('users').find().sort({nome: 1}).toArray(function (err, users) {
            if (err) {
                console.log(err);
                return ;
            }

            html_2 = '<ul>';
            for (let user of users) {
                html_2 += `<li>${user.nome} ${user.profissao}</li>`;
            };
            html_2 += '</ul>';
            res.write(html_1);
            res.write(html_2);
            res.write(html_3);
            res.end();
        });
    });
}).listen(3000);
