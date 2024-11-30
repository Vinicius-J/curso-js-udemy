/*
    Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
 */

// const expressaoAnd = true && true && true && true;
// console.log(expressaoAnd);

// const expressaoOr = true || false;
// console.log(expressaoOr);

// const expressaoNot = !true;
// console.log(expressaoNot);

const usuario = 'Vinícius'; // form usuário digitou
const senha = '123456'; // form usuário digitou
const vaiLogar = usuario === 'Vinícius' && senha === '12345';
console.log(vaiLogar);