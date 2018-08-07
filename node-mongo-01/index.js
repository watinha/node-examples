let client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}, function (err, client) {
    let users = [
        { nome: 'Willian', 'profissao': 'professor'},
        { nome: 'Adalberto', 'profissao': 'advogado'},
        { nome: 'Hélio', 'profissao': 'programador'},
        { nome: 'Luiz', 'profissao': 'dançarino'},
        { nome: 'Bruna', 'profissao': 'engenheira'}
    ];
    if (err) {
        console.log(err);
        return ;
    }
    let db = client.db('mongo-test'),
        count = 0;
    for (let i = 0; i < users.length; i++) {
        db.collection('users').insertOne(users[i], function (err, msg) {
            count++;
            if (!err)
                console.log('sucesso...');
            else
                console.log(err);
            if (count == users.length)
                client.close();
        });
    };
});
