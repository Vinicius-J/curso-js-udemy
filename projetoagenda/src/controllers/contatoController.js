// Importa a classe que vai salvar no banco de dados
const Contato = require('../models/ContatoModel ');

// Gerencia a página index de Contato
exports.index = (req, res) => {
  res.render('contato', {
    contato: {},
  });
}

// Gerencia a página register de Contato
exports.register = async (req, res) => {
  try {
    // Manda os dados do formulário para ser tratado
    const contato = new Contato(req.body);
    // Chama o método register para validar os dados
    await contato.register();

    // se houver erros mostra flash messages com os erros
    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      // salva a seção para as outras páginas e retorna para mesma página
      req.session.save(() => res.redirect(req.get('Referer') || 'index'));
      return;
    }

    // se não houver erros mostra flash messages com sucesso
    req.flash('success', 'Contato registrado com sucesso.');
    // salva a seção para as outras páginas e redireciona para página de edição
    // contato.contato._id -> 1° contato é do controller
    // 2° contato é do ContatoModel
    // _id se refere ao id do MongoDB
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

// Gerencia a página edit de Contato
exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render('404');

  const contato = await Contato.buscaPorId(req.params.id);
  if (!contato) return res.render('404');

  res.render('contato', { contato });
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect(req.get('Referer') || 'index'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    // salva a seção para as outras páginas e redireciona para página de edição
    // contato.contato._id -> 1° contato é do controller
    // 2° contato é do ContatoModel
    // _id se refere ao id do MongoDB
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    return res.render('404');
  }

};

exports.delete = async function (req, res) {
  if (!req.params.id) return res.render('404');

  const contato = await Contato.delete(req.params.id);
  if (!contato) return res.render('404');

  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect(req.get('Referer') || '/'));
  return;
};  
