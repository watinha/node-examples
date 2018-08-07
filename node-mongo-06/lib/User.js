let MongoDocument = require('./MongoDocument')

module.exports = class User extends MongoDocument {
    constructor (data) {
        super(data);
        this.nome = data.nome;
        this.profissao = data.profissao;
        this._id = data._id;
        this.collection = 'users';
    }
    static find (query = {}, limit = 5) {
        return super.find(query, {nome: 1}, limit, 'users').then((result) => {
            return result.map((u) => new User(u))
        });
    }

};
