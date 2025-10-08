import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";

const models = [Aluno];

const connection = new Sequelize(databaseConfig.development);

models.forEach((model) => model.init(connection));

// import sequelize from "../config/database.js";
// import Aluno from "../models/Aluno.js";

// const models = [Aluno];

// models.forEach((model) => model.init(sequelize));
