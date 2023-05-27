// OBJETOS

//Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Helder',
    idade: 43,
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

console.clear();

//Como adicionar um par de chaves?


pessoa.altura = 1.72;

console.log(pessoa);

//Como remover um par de chaves?

delete pessoa.altura;

console.log(pessoa);

console.clear();

//Como percorrer um objeto?

for (let chave in pessoa){

console.log(chave);

}
