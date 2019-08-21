let client = require('mongodb').MongoClient;

module.exports = (() => {
    let db_url;
    return {
        config: (url) => {
            db_url = url;
        },
        list: () => {
            let self = this;
            return client.connect(db_url, { useNewUrlParser: true }).then((connection) => {
                let dbo = connection.db('mongo-test');
                self.conn = connection;
                return dbo.collection('user').find().toArray();
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                self.conn.close();
            });
        }
    };
})();
