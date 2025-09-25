// Configurações do servidor da aplicação

// Carrega variáveis secretas do arquivo .env
require('dotenv').config();

// Gera a capacidade de poder criar o servidor
const express = require('express');

// Inicializando o servidor
const app = express();

// Inicializando o banco de dados
const mongoose = require('mongoose');

// Verifica a conecção com o banco de dados e manda a resposta necessária
// CONNECTIONSTRING vem do arquivo .env secreto
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    // se conectado manda o alerta e inicia o servidor...
    app.emit('pronto');
  })
  // ...se não, mostra o error
  .catch(e => console.log(e));

// Inicia as seções e guarda os dados entre páginas
const session = require('express-session');

// Salva as seções no banco de dados
const MongoStore = require('connect-mongo');

// Mostra mensagens rápidas
const flash = require('connect-flash');

// Importa as rotas do arquivo routes.js
// As routes define o que acontece em cada endereço do site
const routes = require('./routes');

// Especifica os caminhos de pastas/diretórios do servidor
const path = require('path');

// Proteção do cabeçalho HTTP
const helmet = require('helmet');

// Proteção contra falsificação de requisições de formulários
const csrf = require('csurf');

// Importa os middlaware
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');


// Faz o app usar o pacote helmet para a segurança
app.use(helmet());
// Permite o envio de dados dos fomulários
app.use(express.urlencoded({ extended: true }));
// Permite ler os dados que vêm de formulários e requisições JSON
app.use(express.json());
// Deixa a pasta public acessível ao cliente
app.use(express.static(path.resolve(__dirname, 'public')));

// Guarda as informações das sessões
// Salva no banco de dados pra poder usar em outras páginas
const sessionOptions = session({
  // Protege o acesso com um código
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  // Define o tempo dos cokkies
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  }
});
// Faz o app usar as configurações das sessões
app.use(sessionOptions);
// Faz ser possível usar as mensagens rápidas
app.use(flash());

// Diz onde estão os arquivos que são as "páginas HTML"
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Define o EJS como motor que monta as páginas pro usuário
app.set('view engine', 'ejs');

// Faz o app usar o pacote csurf para proteger os fomulários
app.use(csrf());

// Nossos próprio Middlewares
// Uso global, que é comum para toda as páginas
app.use(middlewareGlobal);
// Coloca o token nas páginas
app.use(checkCsrfError);
// Faz a verificação do token para validar ou mostrar error
app.use(csrfMiddleware);
// Faz com com que o app possa usar as rotas criadas
app.use(routes);

// Inicializa o servidor caso o banco de dados esteja pronto
app.on('pronto', () => {
  app.listen(3000, () => {
    // console.log('Acessar http://localhost:3000');
    console.log('Acessar http://127.0.0.1:3000');
    console.log('Servidor Executando na porta 3000');
  });
});
