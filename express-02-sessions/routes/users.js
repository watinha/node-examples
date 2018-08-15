var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('users/index', {});
});
router.post('/login', function(req, res, next) {
    let login = req.body.login,
        password = req.body.password;
    if (login === 'watinha' && password === 'super secreta') {
        req.session.login = 'watinha';
        res.write('<h1>Login realizado com sucesso</h1>');
        res.end();
        return ;
    } else {
        res.status(403);
        res.write('<h1>You shall not pass!!!</h1>');
        res.end();
    }
});

module.exports = router;
