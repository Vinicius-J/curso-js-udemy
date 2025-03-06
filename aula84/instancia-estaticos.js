function teste() {
  console.log('Teste de como as Funções são chamadas.');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  aumentarVolume() { // método de instância
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha() { // método estático
    console.log('OK, vou trocar.');
  }

  static soma(x, y) { // métodos podem receber paramêtros
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
// console.log(controle1);
// ControleRemoto.trocaPilha();
// console.log(ControleRemoto.soma(2, 4)); // posso passar paramêtros para os métodos