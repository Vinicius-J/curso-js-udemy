const express = require('express');
const app = express();

/*
*                           urlperams  querystring      querystring
* http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila
? -> começa a querystring / & -> vai para próxima

*/

// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

//! app.get('/testes/:idUsuarios?/:parametro?', (req, res) => { -> Error: não roda
//   console.log(req.params.idUsuarios);
//   res.send(req.params);
// });

app.get('/testes/:idUsuarios', (req, res) => {
  console.log(req.params.idUsuarios);
  res.send(req.params);
});

app.post('/', (req, res) => {
  //!  console.log(req.body.nome);
  console.log(req);
  // res.send(`O que você me enviou foi ${req.body.nome}`);
  res.send(`O que você me enviou foi nada`);
});

app.listen(3000, () => {
  // console.log('Acessar http://localhost:3000');
  console.log('Acessar http://127.0.0.1:3000');
  console.log('Servidor Executando na porta 3000');
});