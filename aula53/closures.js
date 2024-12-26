function retornaFuncao() {
  const nome = 'Vinícius';
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao());