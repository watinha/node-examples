var a = 10;
let leta = 30;

if (true) {
    let a = 20,
        leta = 40;
    console.log(a);
    console.log(leta);
}

console.log(a);
console.log(leta);

var vetor = ['Willian', 12, 'qualquer coisa', true];
console.log(vetor);
console.log(vetor[0]);
console.log(vetor[3]);
console.log(vetor[4]);

var pessoa = {
    nome: 'Willian',
    idade: 12,
    profissao: {
        local: 'UTFPR',
        nome: 'professor',
        disciplinas: ['WEB1', 'WEB2']
    }
};
console.log(pessoa.nome);
console.log(pessoa.profissao.local);
console.log(pessoa.profissao.disciplinas[1]);
console.log(pessoa.campo);
console.log(pessoa.campo.campo);
