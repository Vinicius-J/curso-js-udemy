// const _velocidade = Symbol('velocidade');

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade(valor) {
//     console.log('SETTER');
//     if (typeof valor != Number) return;
//     if(valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade() {
//     console.log('GETTER');
//     return this[_velocidade];
//   }

//   acelerar() {
//     if (this.velocidade >= 100) return;
//     this[_velocidade]++;
//   }

//   freiar() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const c1 = new Carro('Fusca');

// // for (i = 0; i <= 200; i++) {
// //   c1.acelerar();
// // }

// c1.velocidade = 99;
// console.log(c1.velocidade);


class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto(){
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Vinícius', 'Joaquim');
p1.nomeCompleto = 'Roberto Carlos';
console.log(p1.nomeCompleto);
