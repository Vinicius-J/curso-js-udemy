// function funcao() {
//   console.log('Oi');
//   console.log(arguments[1]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//* arguments que sustenta todos os argumentos enviados
// function funcao() {
//   let total = 0;
//   for(let argumento of arguments){
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// //* Desestruturação de objetos
// function funcao({nome, sobrenome, idade}){
//   console.log(nome, sobrenome, idade);
// }

// let obj = {nome: 'Vinícius', sobrenome:'Joaquim', idade: '22'};
// funcao(obj);

//* Desestruturação de arrays
// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }

// let array = ['Vinícius', 'Joaquim', 22]
// funcao(array);

function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros){
    if(operador === '+')acumulador += numero;
    if(operador === '-')acumulador -= numero;
    if(operador === '/')acumulador /= numero;
    if(operador === '*')acumulador *= numero;
  }
  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);