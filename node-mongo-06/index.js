let User = require('./lib/User');
User.find().then((users) => {
    console.log(users);
    users[1].nome = 'Carlos';
    return users[1].save();
})/*.then(() => {
    let n = new User({
        nome: 'Gestrudinalvo',
        profissao: 'jogador de tênis'
    });
    return n.save();
}).then(() => {
    return User.find({nome: new RegExp('^Ges')})
}).then((gestrudinalvo) => {
    return gestrudinalvo[0].delete();
})*/.then(() => {
    return User.find();
}).then((users) => {
    console.log(users);
    User.close();
});
