// let a = 'A';
// let b = 'B';
// let c = 'C';

// // [a, b, c] = [b, c, a]; // lado esquerdo do = é a desestruturação, do outro é um array

// const letras = [b, c, a];

// [a, b, c] = letras;

// console.log(a, b, c);

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);
// const [primeiroNumero, segundoNumero, ...resto] = numeros; // ...rest, ...spread
// const [um, , tres, ,cinco, ,sete] = numeros;
// console.log(um ,tres ,cinco ,sete);


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// console.log(numeros[1][2]); // maneira mais tranquila de pegar um indice dentro de uma array dentro de outra array

// const [,[,,seis]] = numeros; // maneira mais complexa
const [lista1, lista2, lista3] = numeros; // maneira mais simples de fazer o mesmo
console.log(lista2[2]);