let client = require('mongodb').MongoClient;

module.exports = class PostDAO {
    static async find () {
        let conn = await client.connect('mongodb://mongo/mongo-07'),
            db = conn.db(),
            posts = await db.collection('post').find().toArray();
        conn.close();
        return posts;
    }
}
