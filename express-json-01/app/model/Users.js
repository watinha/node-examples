let client = require('mongodb').MongoClient;

module.exports = class UsersDAO {
    static find (q) {
        return client.connect('mongodb://localhost:27017/mongo-test',
            {useNewUrlParser: true}).then((client) => {
                let db = client.db('mongo-test');
                return db.collection('users')
                         .find({nome: new RegExp(`^${q}`, 'i')})
                         .sort({nome: 1})
                         .toArray();
            }).catch((err) => { throw err; });
    }
};
