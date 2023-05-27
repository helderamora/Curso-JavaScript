// FUNÇÕES

//Definiçao da função

function saudacao() {
    console.log("Óla, Seja bem-vindo(a) ao nosso curso de JavaScript!")
}

saudacao();

console.clear();

// Como enviar parâmetros para as funções?

function saudacao(nome, curso) {
    console.log(`Óla, ${nome} Seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Helder', 'Web Full Stack');

console.clear();

// Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(10, 20);

console.log(resultado / 4);

console.clear();

function miorDoQue50(numero) {
    if (numero > 50) {
        return true;
    }
    return false;
}



