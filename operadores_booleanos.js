// => OPERADORES BOOLEANOS

//Igualdade:    == (ou ===)
//Desigualdade:    != (ou !==)
//Maior que:    >
//Maior ou igual:    >=
//Menor que:    <
//Menor ou igual:    <=
 
const numero = 10;

console.log(numero == 10);
console.log(numero == '10');
console.log(numero === '10');


console.log(numero > 20);
console.log(numero < 20);


// => Conjunções Lógicas

//AND => &&

let idade = 26;
let tenhoCnh = true;

const possoDirigir = idade >= 18 && tenhoCnh === true;

console.log('Posso dirigir?', possoDirigir);


//QR => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

console.log(votoFacultativo);

console.clear()

// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);