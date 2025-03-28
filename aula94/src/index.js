// import { nome2, sobrenome2, idade, soma } from './modulo1';
// import { nome as nome2, sobrenome as sobrenome2, idade, soma } from './modulo1';
// const nome = 'João';
// console.log(nome2, sobrenome2, idade);
// console.log(soma(5, 5));

// import { soma } from './modulo1';
// console.log(soma(5, 5));
// import { Pessoa } from './modulo1';
// import { Pessoa as outraPessoa } from './modulo1';
// const p1 = new outraPessoa('Vinícius', 'Joaquim');
// console.log(p1);

// import * as MeuModulo from './modulo1';

import soma, { nome, sobrenome, idade } from './modulo1'; //* pega o padrão de exportação do módulo
console.log(nome, sobrenome, idade);
console.log(soma(5,5));