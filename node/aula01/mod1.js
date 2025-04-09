const nome = 'Vinícius';

const sobrenome = 'Joaquim';

// const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports);

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.SOBRENOME = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Qualquer Coisa';

// console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// exports.Pessoa = Pessoa;

module.exports = {
  nome, sobrenome, Pessoa
};