//* defineProperty - defineProperties

function Produto(nome, preco, estoque){
  Object.defineProperty(this, 'estoque',{
    enumerable: true, //* se vai ou não mostrar a chave
    value: estoque, //* vai definir o valor do estoque com o valor recebido no parâmetro
    writable: false, //* se pode ou não alterar o valor
    configurable: false, //* se ela pode ou não ser reconfigurar usando o defineProperty
  });

  // Object.defineProperty(this, 'estoque',{ //* exemplo de configurable true o obj sendo refeito
  //   enumerable: true,
  //   value: estoque, //* pode ser qualquer coisa, como uma função
  //   writable: true,
//   configurable: false, //* configurable como false não deixa a chave ser apagada
  // });

  Object.defineProperties(this, { //* Mesma coisa do defineProperty, mas com mais de uma chave
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false,
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));
console.log(p1);