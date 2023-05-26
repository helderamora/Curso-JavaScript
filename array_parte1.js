// ARRAYS



// - Como criar um array?

let arr = ['Helder', 43, 1.72, true];

console.log(arr);

// - Como acessar um array

console.log('Primeiro elemento do array: ', arr[0]);
console.log('Segundo elemento do array: ', arr[1]);
console.log('Teriro elemento do array: ', arr[2]);
console.log('Quarto elemento do array: ', arr[3]);

// - Como obter o tamanho do array

console.log('Tamanho do array', arr.length);

// - Percorrendo arrays

console.clear();

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr ) {
    console.log(elemento);
}

console.clear();

for (let indice in arr) {
    console.log(indice, arr[indice]);
}