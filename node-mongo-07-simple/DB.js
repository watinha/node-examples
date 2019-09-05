let client = require('mongodb').MongoClient;

module.exports = class DB {

    static async buscar (collection) {
        let conn = await client.connect('mongodb://mongo/mongo-07', { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db();
        return db.collection(collection).find().toArray();
    }

};
