const create_client = require('./db'),
      ObjectId = require('mongodb').ObjectId;

module.exports = class Users {

  constructor (params) {
    Object.assign(this, params);
  }

  static async find (id) {
    const conn = await (create_client()).connect(),
          db = conn.db();
    let result;
    if (id)
      result = new Users(await db.collection('users').findOne({ _id: ObjectId(id) }));
    else
      result = (await db.collection('users').find().toArray()).map((user) => new Users(user));
    conn.close();
    return result;
  }

  async save () {
    const conn = await (create_client()).connect(),
          db = conn.db();
    if (this._id)
      await db.collection('users').updateOne({ _id: ObjectId(this._id)}, {$set: this});
    else
      await db.collection('users').insertOne(this);
    conn.close();
  }

  static async delete (id) {
    const conn = await (create_client()).connect(),
          db = conn.db();
    await db.collection('users').remove({ _id: ObjectId(id)});
    conn.close();
  }

};
