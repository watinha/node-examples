let fs = require('fs'),
    util = require('util'),
    Mustache = require('mustache'),
    User = require('../model/User'),
    list_template, show_template;

list_template = (util.promisify(fs.readFile))('./app/view/list.mustache', 'utf-8');
show_template = (util.promisify(fs.readFile))('./app/view/show.mustache', 'utf-8');

list_template.catch((err) => {
    throw err;
});
show_template.catch((err) => {
    throw err;
});

module.exports = class Usuario {
    constructor (req, res) {
        this.req = req;
        this.res = res;
    }
    list (order) {
        let self = this,
            users;
        if (order === 'nome') {
            users = User.find({}, {nome: 1});
        } else {
            users = User.find({}, {profissao: 1});
        }
        users.then((users) => {
            list_template.then((template) => {
                self.res.write(Mustache.render(template, {users: users}))
                self.res.end();
            });
        });

    }
    show (_id) {
        let self = this;
        User.findOne(_id).then((user) => {
            show_template.then((template) => {
                self.res.write(Mustache.render(template, user));
                self.res.end();
            });
        }).catch((err) => {
            throw err;
        });
    }
};
