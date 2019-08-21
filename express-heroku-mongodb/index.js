let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    user_controller = require('./app/controller/user'),
    user_model = require('./app/model/user');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app/view'));
app.use(express.static(path.join(__dirname, 'public')));

user_model.config('mongodb://mongo:27017/mongo-test');

app.use('/user', user_controller);

app.listen(3000);
