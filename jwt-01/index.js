const jwt = require('jsonwebtoken');

let token = jwt.sign({ nome: 'Willian' }, 'chave_dificil');
console.log(token);

console.log(jwt.verify(token, 'chave_dificil'));
