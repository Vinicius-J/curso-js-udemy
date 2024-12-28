//* Construtura -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Privadas
  const ID = 123456;
  const metodoInterno = function(){

  };

  // atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function(){
    console.log(this.nome + ': sou um método');
  };
}


const p1 = new Pessoa('Vinícius', 'Joaquim');
const p2 = new Pessoa('Roberto', 'Carlos');

console.log(p2.nome);
p1.metodo();