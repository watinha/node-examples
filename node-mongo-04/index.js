let client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}, function (err, client) {
    if (err) {
        console.log(err);
        return ;
    }
    let db = client.db('mongo-test');
    db.collection('users').deleteOne({nome: 'Willian'}, function (err) {
        if (err)
            console.log(err);
        client.close();
    });
});
