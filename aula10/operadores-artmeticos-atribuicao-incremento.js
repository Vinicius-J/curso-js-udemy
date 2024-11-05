/* 
* Aritméticos
-> Adição e concatenação = +
-> Subtração = -
-> Multiplicação = *
-> Divisão = /
-> Potenciação = ** -> primeiro o sinal e depois o número que quero elevar
-> Resto da divisão = % -> Retorna o resto de uma divisão, se for exata retorna 0

* Atribuição
-> Incremento = ++ -> Acrescenta um na soma
-> Decremento = -- -> Subtrai um da soma
-> += , -= , *= , /= , **= -> Lê da seguinte forma: letQualquer = letQualquer +,-,*,/,** valorQualquer
-> parseInt = Transforma um número de uma string em um number sem casas decimais
-> parseFloat = Transforma um número de uma string com casas decimais
-> Number = Transforma um número em uma string da maneira que eles estiver
*/

const numb1 = 1;
const numb2 = 2;
const numb3 = parseInt('3');
const numb4 = parseFloat('4.2');
const numb5 = Number('5');
const concatenacao = '1';

// console.log(numb4 ** numb2);
// console.log(numb5 % numb2);

// console.log(numb5 + concatenacao); // Exemplo de concatenação

let contador = 0;
contador += 2; // contador = contador + 2
contador += 2;
contador += 2;
console.log(contador);

