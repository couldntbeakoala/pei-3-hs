// Módulos
const express = require("express");
const router = express.Router();

// Controllers
const clientController = require("../controllers/clientController");

// HTTP PRINCIPAL:
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Monitoramento com Sensores de Vazão" });
});

// HTTP USUÁRIO:
// POST - CADASTRAR
router.post("/register", clientController.clientCreate);
// GET - LISTAR
router.get("/clients/:id", clientController.clientVerifyToken, clientController.clientList);
// PUT - ATUALIZAR
router.put("/update_client/:id", clientController.clientUpdate);
// DEL - APAGAR
router.delete("/delete_client/:id", clientController.clientDelete);
// POST - LOGIN
router.post("/login", clientController.clientVerify);

module.exports = router;