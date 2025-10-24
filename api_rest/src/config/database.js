require("dotenv").config();

// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DATABASE_USERNAME,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: process.env.DATABASE_HOST,
//     dialect: "mysql",
//     logging: console.log,
//     define: {
//       timestamps: true,
//       underscored: true,
//     },
//   }
// );

// export default sequelize;

module.exports = {
  development: {
    database: process.env.DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
  },
};
