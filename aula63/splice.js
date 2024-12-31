//               -5      -4        -3         -2        -1  -> indicies negativos
//                0       1         2          3         4  -> indicies normais  
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, delete, elem1, elem2, elem3, ...)


// const removidos = nomes.splice(4, 2);
// const removidos = nomes.splice(-2, 1);

// const removidos = nomes.splice(3, 0, 'Luiz'); //* manda Gabriel pra frente e adiona no indice dele o Luiz

// const removidos = nomes.splice(3, 1, 'Luiz'); //* remove Gabriel e adiciona Luiz

//? shift -> remove do inicio
// const removidos = nomes.splice(0,1);

//?pop -> remove do final
// const removidos = nomes.splice(-1,1);

//?unshift -> adiciona no inicio
// const removidos = nomes.splice(0,0,'Vinícius');

//?push -> adiciona no final
// const removidos = nomes.splice(nomes.length, 0, 'Vinícius');



console.log(nomes, removidos);