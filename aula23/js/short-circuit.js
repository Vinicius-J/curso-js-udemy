/*
&& -> todas precisam ser verdadeiras para retornar true
|| -> todas precisam ser falsas para retornar false
*/

// console.log('Vinícius Joaquim' && 0 && 'Maria');
// console.log('Vinícius Joaquim' && true && 'Maria');
// console.log('Vinícius Joaquim' && true && NaN);

/*
    ValoreS FALSY
* false (literal)
* 0
* '' "" ``
* null / undefined
* NaN

Obs.: Qualquer coisa que não seja isso listado acima retorna true em JavaScript
 */

// console.log('Luiz' && '' && 'Maria');

// function falaOi(){
//     return 'Oi';
// }

// const vaiExecutar = true;
// console.log(vaiExecutar && falaOi()); //Obs2.: Retorna o primeiro valor verdadeiro ou o último falso

// const vaiExecutar2 = false; // 0, undefined, null, NaN
// console.log(vaiExecutar2 && falaOi());

// console.log(0 || undefined || false || null || 0); // Retorna a primeira expressão verdadeira ou a última falsa

const corUsuario = null;
// const corPadrao = 'red';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // retorna o primeiro valor verdadeiro ou o último falso
