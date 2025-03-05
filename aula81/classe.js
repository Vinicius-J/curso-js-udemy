class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando`);
  }
  comer() {
    console.log(`${this.nome} está comendo`);
  }
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa('Vinícius', 'Joaquim');
const p2 = new Pessoa('Maria', 'Joaquim');
const p3 = new Pessoa('João', 'Joaquim');
const p4 = new Pessoa('Roberto', 'Joaquim');
console.log(p1.falar());