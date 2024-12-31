// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

// Para cada elemento
// Retorne apenas uma string com o nome da possoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const nomes = pessoas.map(obj => obj.nome); //* retorne o nome da pessoa
// console.log(nomes);

// const idade = pessoas.map((obj) => { //* remova apenas nome
//   delete obj.nome;
//   return obj;
// });

// const idades = pessoas.map(obj => ({ idade: obj.idade })); //* remova apenas nome 2.0
// console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
  const newObj = {...obj};
  newObj.id = (indice + 1) * 1000;
  return newObj;
});
console.log(pessoas);
console.log(comIds);