let fs = require('fs'),
    mustache = require('mustache'),
    User = require('../model/user');

class UserController {
    get (req, res) {
        let self = this;
        User.find().then((users) => {
            self.render(res, 'app/view/usuario.mustache.html', {users: users});
        });
    }

    render (res, template, data) {
        fs.readFile(template,
                    'utf-8', (err, template) => {
            res.write(mustache.render(template, data));
            res.end();
        });
    }
}
module.exports = new UserController();
