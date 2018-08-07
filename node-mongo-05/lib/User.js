let conn = require('./Client')

module.exports = class User {
    constructor (data) {
        this.nome = data.nome;
        this.profissao = data.profissao;
        this._id = data._id;
    }

    save () {
        if (this._id) {
            return conn.then((conn) => {
                return conn.db.collection('users').updateOne({_id: this._id}, {$set: this});
            });
        }
        return conn.then((conn) => {
            return conn.db.collection('users').insertOne(this);
        });
    }

    delete () {
        if (this._id) {
            return conn.then((conn) => {
                return conn.db.collection('users').deleteOne({_id: this._id});
            });
        }
        return null;
    }

    static find (query = {}, limit = 5) {
        return conn.then((conn) => {
            return conn.db.collection('users').find(query)
                          .sort({nome: 1}).limit(limit).toArray().then((result) => {
                              let users = [];
                              for (let i = 0; i < result.length; i++) {
                                  users.push(new User(result[i]));
                              };
                              return users;
                          });
        });
    }

    static close() {
        conn.then((conn) => {
            conn.close();
        });
    }
};
