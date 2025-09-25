// Importa o gerenciador do banco de dados do Contato
const Contato = require('../models/ContatoModel ');

// Madar renderizar a página index para o usuário
exports.index = async (req, res) => {
  // Solicita todos os contatos salvos no banco de dados
  const contatos = await Contato.buscaContatos();
  // Renderiza a página mandando a lista de contatos como paramêtro
  res.render('index', { contatos });
};