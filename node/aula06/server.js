const express = require('express');
const app = express();

//          Criar  ler atualizar apagar
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT    DELETE

// http://meusite.com/ <- GET -> Navegador entrega a página/
// http://meusite.com/sobre <- GET -> Navegador entrega a página /sobre
// http://meusite.com/contato <- GET -> Navegador entrega a página /contato

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/',(req, res)=>{
  res.send('recebi o formulário');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
  // console.log('Acessar http://localhost:3000');
  console.log('Acessar http://127.0.0.1:3000');
  console.log('Servidor Executando na porta 3000');
});