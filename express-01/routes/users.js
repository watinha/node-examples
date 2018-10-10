var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function(req, res, next) {
    let q = (req.query && req.query.nome) ? {nome: new RegExp('^' + req.query.nome, 'i')} : {};
    User.find(q, { nome: 1}, 10).then((users) => {
        res.render('users/list', { title: 'Lista de usuários', users: users });
    });
});
router.get('/new', function (req, res, next) {
    res.render('users/new');
});
router.post('/create', function (req, res, next) {
    let user = new User({});
    user.nome = req.body.nome;
    user.profissao = req.body.profissao;
    user.save();
    res.redirect('/users');
});

module.exports = router;
