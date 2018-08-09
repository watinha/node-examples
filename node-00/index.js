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

for (var i = 0; i < 10; i++) {
    console.log(i + " exemplo");
};

let i = 5;
while (i < 10 && i > 3) {
    i++;
}

let sup = true, i = 0;
do {
    if (i++ > 10)
        sup = !sup;
} while (sup);

var a = 20, b = 30;
if (a < b) {
    console.log("legal")
} else {
    console.log("não legal");
}

var a = 2;
switch (a) {
    case 2:
        console.log("opa 2");
        break;
    case 3:
        console.log("quase 3");
        break;
    case 4:
        console.log("já deu...");
        break;
    default:
        console.log("tentativa");
}

function somar (a, b) {
    return a + b;
}
somar(20 + 3);


console.log(1 == true); // true
console.log(1 === true); // false
console.log("0" == false); // true
console.log("abc" == "a" + "b" + "c"); // true
console.log(null == undefined); // true
console.log(30 - "7"); // 23
console.log("30" + 7); // 307


function retangulo (l, a) {
    this.largura = l;
    this.altura = a;
}
retangulo.prototype.area = function () {
    return this.largura * this.altura;
}
let r = new retangulo(10, 2);
console.log(r.area());








