let client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}, function (err, client) {
    if (err) {
        console.log(err);
        return ;
    }
    let db = client.db('mongo-test');
    db.collection('users').updateMany({nome: /i/}, {$set: {profissao: 'ser legal'}}, function (err, result) {
        if (err)
            console.log(err);
        client.close();
    });
});
