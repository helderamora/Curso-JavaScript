// >> LAÇOS NÚMERICOS: FOR

const input = require('readline-sync');

// Problema 


// Acumulador

let acumulador = 0;

acumulador += 10;

acumulador = acumulador + 2;

acumulador++

console.log(acumulador);

console.clear();

// Etrutura for 

for (let i = 0; i <= 14; i++) {
    console.log('Repetiçaõ: ', i);
}

console.clear();


for (let i = 14; i >= 0; i--) {
    console.log('Repetiçaõ: ', i);
}

console.clear();

// Resolvendo problema inicial

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`informe a nota ${i} do aluno: `));

    soma = soma + nota;
}

console.log(`A média do aluno é: ${soma / 3}`);