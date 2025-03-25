function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.round(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject('BAD VALUE');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise.');
    }, tempo);
  });
}

// const promises = [
//   // 'Primeiro Valor',
//   esperaAi('Promise 1', rand(1, 5)),
//   esperaAi('Promise 2', rand(1, 5)),
//   esperaAi('Promise 3', rand(1, 5)),
//   // esperaAi(1000, 1000),
//   // 'Outro valor'
// ];

// Promise.all(promises)
// .then(function (valor){
//   console.log(valor);
// }).catch(function(erro){
//   console.log(erro);
// })

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   }).catch(function (erro) {
//     console.log(erro);
//   })

function baixaPagina(){
  const emCache = true;

  if(emCache){
    return Promise.reject('Página em cache');
  } else{
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina);
})
.catch(e => console.log('Error: ',e))
