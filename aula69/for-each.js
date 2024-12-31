const a1 = [10, 20, 30];

// a1.forEach(function(valor, indice, array){
//   console.log(valor, indice, array);
// });

let total = 0;
a1.forEach(valor => { //* simulação de um reduce
  total += valor;
});

console.log(total);
