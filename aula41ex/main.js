//* Escreva uma função que recebe dois números e retorne o maior deles

// const randomX = Math.random() * (50 - 1) + 1; //? Minha resolução
// const randomY = Math.random() * (50 - 1) + 1;

// let x = Math.floor(randomX);
// let y = Math.floor(randomY);

// const comp = x > y ? `x = ${x} e é maior que y = ${y}` : `y = ${y} e é maior que x = ${x}`;
// console.log(comp);

const max2 = (x, y) => x > y ? x : y; //* Resolução do professor
console.log(max2(10, 20));
