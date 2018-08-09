var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if (req.session && req.session.login) {
        res.render('index', {
            title: 'Secret webpage',
            user: req.session.login
        });
        return ;
    }
    res.redirect('/users/login');
});

module.exports = router;
