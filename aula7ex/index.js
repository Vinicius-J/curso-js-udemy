/* 
Vinícius Joaquim dos Santos tem 21 anos, pesa 86kg. 
Tem 1.86 de altura e seu IMC é de *****.
Vinícius Joaquim dos Santos nasceu em 2002.
*/

const nome = 'Vinícius Joaquim';
const sobrenome = 'dos Santos';
const anoDeNascimento = 2002;
const peso = 86;
const alturaEmM = 1.86;
let idade;
idade = 2024 - anoDeNascimento;
let imc; // peso / (altura * altura)
imc = peso/(alturaEmM * alturaEmM);

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso + 'kg.');
console.log(`Ele tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
// Essa linha acima é uma maneira que é possível escrever o código de uma forma mais legível.
console.log(nome + ' nasceu em ' + anoDeNascimento + '.'); // Outra forma de escrever o código.
