let UsuarioView = require('./UsuarioView');

module.exports = class Usuario {
    constructor (client, req, res) {
        this.client = client.connect('mongodb://localhost:27017/mongo-test', {useNewUrlParser: true});
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
                let view = new UsuarioView();
                self.res.write(view.list(users));
                self.res.end();
                client.close();
            });
        });
    }
};
