import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";
import Foto from "../models/Foto.js";

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig.development);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

// import sequelize from "../config/database.js";
// import Aluno from "../models/Aluno.js";

// const models = [Aluno];

// models.forEach((model) => model.init(sequelize));
