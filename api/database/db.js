const Sequelize = require("sequelize");

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