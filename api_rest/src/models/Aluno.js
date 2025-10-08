import { DataTypes, Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        peso: DataTypes.FLOAT,
        altura: DataTypes.FLOAT,
      },
      {
        sequelize,
        modelName: "Aluno",
        tableName: "alunos",
        underscored: true,
      }
    );
    return this;
  }
}
