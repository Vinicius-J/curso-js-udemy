//return
// retorna o valor
// termina a função

// function soma(a,b){
//   return a + b;
// }

// function falaFrase(comeco){
//   function falaResto(resto){
//     return comeco + ' ' + resto;
//   }
//   return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

// function duplica(n){
//   return n * 2;
// }
// function triplica(n){
//   return n * 3;
// }
// function quadriplica(n){
//   return n * 4;
// }

// function criaMultiplicador(multiplicador){
//   function multiplicacao(n){
//     return n * multiplicador;
//   }
//   return multiplicacao;
// }

function criaMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));