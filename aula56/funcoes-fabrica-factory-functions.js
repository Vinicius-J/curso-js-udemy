// factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },
    // Setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },
    fala(assunto = 'falando sobre NADA.') {
      return `${this.nome} está ${assunto}.`;
    },
    peso: p,
    altura: a,
    //Getter
    get imc() { //* imc fingindo que é um atributo da classe, mesmo sendo método
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Vinícius', 'Joaquim', 1.86, 88);
console.log(p1.imc);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
// const p2 = criaPessoa('Roberto', 'Carlos', 1.72, 65);
// console.log(p2.imc());
console.log(p1.fala());