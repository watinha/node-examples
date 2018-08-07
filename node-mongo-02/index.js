let client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}, function (err, client) {
    if (err) {
        console.log(err);
        return ;
    }
    let db = client.db('mongo-test');
    db.collection('users').find({}).sort({nome: 1}).toArray(function (err, result) {
        if (err) {
            console.log(err);
            return ;
        }
        console.log('Retornando todos os documentos...');
        console.log(result);
    });
    db.collection('users').find({nome: 'Willian'}).toArray(function (err, result) {
        if (err) {
            console.log(err);
            return ;
        }
        console.log('Retornando pelo nome...')
        console.log(result);
    });
    db.collection('users').find({nome: new RegExp('^W', 'i')}).limit(1).toArray(function (err, result) {
        if (err) {
            console.log(err);
            return ;
        }
        console.log('Retornando pelo nome...')
        console.log(result);
        client.close();
    });
});
