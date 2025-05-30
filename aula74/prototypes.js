/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Portótipo é um termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futurars produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/


// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Vinícius', 'J.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função Construtora

console.dir(pessoa1);
console.dir(data);