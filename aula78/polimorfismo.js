function Conta(agencia, conta, saldo) { // Superclass
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag / c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor, limite){
  if(valor > (this.saldo + this.limite)){
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

function ContaPoup(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo);
}

ContaPoup.prototype = Object.create(Conta.prototype);
ContaPoup.prototype.constructor = ContaPoup;

const cp = new ContaPoup(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);