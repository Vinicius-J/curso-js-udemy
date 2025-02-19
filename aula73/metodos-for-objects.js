/*
Object.values
Object.entries
Object.assing(des, any) -> copia um objeto
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

//* Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
// Object.freeze(produto);
// produto.nome = 'Outro nome';
// console.log(produto);

// const xicara = produto; // aponta para o mesmo objeto
// const xicara = {
//   ...produto, // copia o objeto
//   material: 'porcelana',
// };

// const xicara = Object.assign({}, produto, { material: 'porcelana' }); // copia objeto

const xicara = { nome: produto.nome, preco: produto.preco }; // copia objeto

// xicara.nome = 'Xícara';
// xicara.preco = 2.5;
// console.log(produto);
// console.log(xicara);

// console.log(Object.keys(produto));

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// console.log(Object.values(produto)); // retorna o valor do obj
// console.log(Object.entries(produto)); // retorna nomes e valores do obj separados

// for (let entry of Object.entries(produto)) {
//   console.log(entry);
// }

for ([chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}