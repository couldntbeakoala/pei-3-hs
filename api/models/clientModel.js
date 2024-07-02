const Sequelize = require("sequelize");
const data = require("../database/db.js");

const Client = data.define("client", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    validate: { is: /^\w{3,}$/ },
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { data, modelName: "client", tableName: "clients" });

data.sync().then(() => {
  console.log("Modelo sincronizado com o banco de dados.");
});

module.exports = Client;