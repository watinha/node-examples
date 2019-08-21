let express = require('express'),
    router = express.Router(),
    user_model = require('../model/user');

router.get('/', (req, res) => {
    user_model.list().then((users) => {
        res.render('user/list', { users: users });
    })
});

module.exports = router;
