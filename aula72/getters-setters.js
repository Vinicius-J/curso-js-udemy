// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    // value: estoque, // valor
    // writable: true, // pode alterar
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Bad value");
        return;
      }

      estoquePrivado = valor;
    }
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    }
  };
}

const p1 = new Produto("Camiste", 20, 3);
// console.log(p1);
p1.estoque = 500;
// console.log(p1.estoque);
const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa";
console.log(p2.nome);