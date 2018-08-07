let client = require('mongodb').MongoClient;
module.exports = client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true}).then((conn) => {
    return {
        db: conn.db('mongo-test'),
        close: function () {
            conn.close();
        }
    };
});
