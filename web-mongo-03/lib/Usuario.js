let fs = require('fs'),
    mongo = require('mongodb'),
    Mustache = require('mustache');

module.exports = class Usuario {
    constructor (req, res) {
        this.client = mongo.MongoClient.connect(
            'mongodb://localhost:27017/mongo-test', {useNewUrlParser: true});
        this.req = req;
        this.res = res;
    }
    list (order) {
        let self = this;
        self.client.then((client) => {
            let db = client.db('mongo-test');
            let query = db.collection('users').find();

            if (order === 'nome')
                query.sort({nome: 1});
            else
                query.sort({profissao: 1});

            query.toArray(function (err, users) {
                if (err) {
                    console.log(err);
                    return ;
                }
                fs.readFile('./lib/list.mustache', 'utf-8', (err, template) => {
                    if (err) throw err;
                    self.res.write(Mustache.render(template, { users: users }));
                    self.res.end();
                    client.close();
                });
            });
        });
    }
    show (_id) {
        let self = this;
        self.client.then((client) => {
            let db = client.db('mongo-test');
            db.collection('users').findOne({_id:mongo.ObjectId(_id)}, function(err, user) {
                if (err) throw err;
                fs.readFile('./lib/show.mustache', 'utf-8', (err, template) => {
                    if (err) throw err;
                    self.res.write(Mustache.render(template, user));
                    self.res.end();
                    client.close();
                });
            });
        });
    }
};
