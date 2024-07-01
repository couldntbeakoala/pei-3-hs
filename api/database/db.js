import { Sequelize } from 'sequelize';
const Sequelize = require("sequelize");

import sqlite3 from 'sqlite3';

const sequelize = new Sequelize ({
  dialect: "sqlite",
  storage: "clients.sqlite"
});

try {
  sequelize.authenticate();
  console.log("Conectado ao banco de dados com sucesso!");
} catch (error) {
  console.log("Erro ao conectar ao banco de dados:", error);
}

module.exports = sequelize;
