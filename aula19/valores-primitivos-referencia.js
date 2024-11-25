/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Valores passados por referência

*/

let a = [1, 2, 3];
let b = [...a]; // com os 3 pontos se cria uma cópia independente 
let c = b;

const d = {
    nome: 'Vinícius',
    sobrenome: 'Joaquim',
};

const e = {...d}; // com os 3 pontos se cria uma cópia independente 