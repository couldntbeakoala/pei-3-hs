// Bibliotecas & módulos utilizados
const express = require("express");
const app = express();
const data = require("./database/db.js");
const routes = require("./routes/routes.js");

// JWT
const jwt = require("jsonwebtoken");

// Modelos
const Client = require("./models/clientModel");

// Codificação JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Rota principal
app.use("/api", routes);

try {
  data.sync().then(() => {
    app.listen(3000);
  })
} catch (error) {
  console.log("Houve uma falha ao sincronizar com o banco de dados.", error);
}
