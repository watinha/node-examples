let client = require('mongodb').MongoClient;

module.exports = class User {
    static find () {
        return client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true})
                     .then((client) => {
            let db = client.db('mongo-test');
            return db.collection('users').find({}).toArray();
        });
    }
};
