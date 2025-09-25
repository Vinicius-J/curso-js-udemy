// Importa o gerenciador do banco de dados do Login
const Login = require('../models/LoginModel ');

// Gerencia a página index de Login
exports.index = (req, res) => {
  // Se estiver logado carrega a página de logado
  if (req.session.user) return res.render('login-logado');
  // Se não estiver, carrega a de fazer login
  return res.render('login');
};

// Gerencia a página register de Login
exports.register = async (req, res) => {
  try {
    // Manda os dados do formulário da página register para ser tratados na classe Login
    const login = new Login(req.body);
    // Chama o método register para validar os dados
    await login.register();

    // se houver erros mostra flash messages com os erros
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      // salva a seção para as outras páginas e retorna para mesma página
      req.session.save(() => res.redirect(req.get('Referer') || 'index'));
      return;
    }
    // se não houver erros manda flash messages de sucesso
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    // salva a seção para as outras páginas e retorna para mesma página
    req.session.save(() => res.redirect(req.get('Referer') || 'index'));
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

// Gerencia a página login de Login
exports.login = async (req, res) => {
  try {
    // Manda os dados do formulário da página login para ser tratados na classe Login
    const login = new Login(req.body);
    // Chama o método login para validar os dados
    await login.login();

    // se não houver dados cadastrados manda flash message de erro
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      // salva a seção para as outras páginas e retorna para mesma página
      req.session.save(() => res.redirect(req.get('Referer') || 'index'));
      return;
    }

    // se houver dados cadastrados manda flash message de login com sucesso
    req.flash('success', 'Você entrou no sistema.');
    req.session.user = login.user;
    // salva a seção para as outras páginas e retorna para mesma página
    req.session.save(() => res.redirect(req.get('Referer') || 'index'));
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

// Quando o usuário fizer logout ele é redirecionado para o início
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
