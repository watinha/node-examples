var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if (req.cookies && req.cookies.login) {
        res.render('index', {
            title: 'Secret webpage',
            user: req.cookies.login
        });
        return ;
    }
    res.redirect('/users/login');
});

module.exports = router;
