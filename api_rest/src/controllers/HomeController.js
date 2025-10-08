import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Roberto",
      sobrenome: "Carlos",
      email: "emailroberto@gmail.com",
      idade: 56,
      peso: 86,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
