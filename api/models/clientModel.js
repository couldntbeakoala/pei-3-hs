const Sequelize = require("sequelize");
const database = require("../database/db.js");
const Client = database.define("client", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { database, modelName: "client", tableName: "clients" });

module.exports = Client;