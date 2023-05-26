// LAÇOS CONDICIONAIS

const input = require('readline-sync');

const numero_sorteado = 5;

let numero = Number( input.question('Digite um numero:'));

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...')

    numero = Number( input.question('Digite um número'))
}

console.log('Você aceretou!!!');