var Pessoa = require('./lib/Pessoa'),
    pessoas = [];

for (let i = 1; i <= 7; i++) {
    let p = new Pessoa(`Nome ${i}`, `Sobrenome ${i}`);
    pessoas.push(p);
};

for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].get_full_name());
};
