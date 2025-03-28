const nome = 'Vinícius';
const sobrenome = 'Joaquim';
const idade = 22;
const cpf = 'cpf'
function soma(x, y) {
  return x + y;
}
// export { nome as nome2, sobrenome as sobrenome2, idade, soma };

// export default function soma(x, y){ //* padrão de exportação
//   return x + y;
// }

// export class Pessoa{
//   constructor(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
// }

export { nome, sobrenome, idade, soma as default }; //* nome é o padrão de exportação
