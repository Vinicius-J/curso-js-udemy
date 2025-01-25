//* objeto literal
// const pessoa = { 
//   nome: 'Vinícius', // chave
//   sobrenome: 'Joaquim',
// };

//* modos de chamar chaves de objects
// const chave = 'nome'
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);
// console.log(pessoa['sobrenome']);


//* object construct
// const pessoa1 = new Object();
// pessoa1.nome = 'Vinícius';
// pessoa1.sobrenome = 'Joaquim';
// pessoa1.idade = 22;
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// pessoa1.falarNome = function () { //* função dentro de objeto chama método
//   return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return (dataAtual.getFullYear() - this.idade);
// };
// console.log(pessoa1.getDataNascimento());
// pessoa1.falarNome();

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Vinícius', 'Joaquim');
console.log(p1);

