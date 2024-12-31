// Retorna o número maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) { //* maneira bruta de fazer
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };\

// function callbackFilter(valor, indice, array) { //* maneira mais correta e que pode ser reutilizada
//   return valor > 10;
// };

// const numerosFitlrados = numeros.filter(callbackFilter);

// const numerosFitlrados = numeros.filter(valor => valor > 10) //* função limpa de se usar

// const numerosFitlrados = numeros.filter((valor, indice, array) => {
//   console.log(valor,indice);
//   return valor > 10;
// });

// console.log(numerosFitlrados);

//! --------------------------------------------------------------------------------

// Retorna as pessoas que tem o nome com 5 letras ou mais
// Retorna as pessoas com mais de 50 anos
// Retorna as pessoas cujo nome termina em a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7); //* primeiro retorno
// console.log(pessoasNomeGrande);

// const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);//* mais que 50 anos
// console.log(pessoasMaisVelhas);

const pessoasNomeTerminaEmA = pessoas.filter((objeto) => { //* nome termina com 'a'
  return objeto.nome.toLowerCase().endsWith('a');
});

console.log(pessoasNomeTerminaEmA);