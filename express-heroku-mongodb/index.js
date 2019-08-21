let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    user_controller = require('./app/controller/user'),
    user_model = require('./app/model/user'),
    mongodb_uri = process.env.MONGODB_URI || 'mongodb://mongo:27017/mongo-test',
    port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app/view'));
app.use(express.static(path.join(__dirname, 'public')));

user_model.config(mongodb_uri);

app.use('/user', user_controller);

app.listen(port);
