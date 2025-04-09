const mod1 = require('./mod1');
console.log(mod1);
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome);
// console.log(sobrenome);
// console.log(falaNome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Vinícius');
console.log(p1);