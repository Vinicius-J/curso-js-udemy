// Suporte ECMASctipt para navegadores antigos
import 'core-js/stable';

// Suporte para poder usar async/await em navegadores antigos
import 'regenerator-runtime/runtime';

// Classe para verificar a validade do login e cadastro
import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

// import './assets/css/style.css';

