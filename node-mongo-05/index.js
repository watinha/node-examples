let User = require('./lib/User');
User.find().then((users) => {
    console.log(users);
    users[2].nome = 'Adalberto';
    return users[2].save();
}).then(() => {
    let n = new User({
        nome: 'Gestrudinalvo',
        profissao: 'jogador de tênis'
    });
    return n.save();
}).then(() => {
    return User.find({nome: new RegExp('^Ges')})
}).then((gestrudinalvo) => {
    return gestrudinalvo[0].delete();
}).then(() => {
    User.close();
});
