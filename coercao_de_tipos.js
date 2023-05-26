// > COERÇÃO DE TIPOS

// - 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);


// - 2. Coerção Implícita (Automática)

console.log('10' + 1); 

console.clear();

// Qual será a saída desse código?
let n = 1 + "1"; 

n = n - 1;

console.log(n); // 10

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // 95

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // 5234
// Qual será a saída desse código?
console.log("10"- "4" - "3" - 2 + "5"); //  8