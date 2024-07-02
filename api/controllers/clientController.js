const client = require("../models/clientModel");
const jwt = require("jsonwebtoken");

module.exports = class clientController {

  // VERIFICAR LOGIN
  static async clientVerify(req, res) {
    const { userInput, password } = req.body;

    let email, name;

    if (userInput.includes('@')) {
      email = userInput;
    } else {
      name = userInput;
    }

    const data = {}

    if (email)
      data.email = email;
    else if (name)
      data.name = name;
    data.password = password;

    const existentClient = await client.findOne({ where: data }).then((existentClient) => {
      if (existentClient!= undefined) {
        const id = existentClient.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300
        });
        res.json({ token, id });
      } else {
        res.status(402).json({ message: "Cliente ou senha inválidos!" });
      }
    });
  }

  // VERIFICAR TOKEN
  static async clientVerifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token)
      return res.status(401).json({ auth: false, message: "Nenhum token encontrado!" });
    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error)
        return res.status(500).json({ auth:false, message: "Falha na autenticação com o token!" });

      // Salvar no request para uso posterior:
      res.json({ token, id, name: existentClient.name });
      req.clientId = decoded.id;
      next();
    });
  }

  // CRIAR
  static async clientCreate(req, res) {
    console.log("clientCreate called:", req.body);
    const { name, email, password } = req.body;
    const newClient = { name, email, password };
    try {
      const createdClient = await client.create(newClient);
      console.log("Cadastro realizado com sucesso:" + createdClient);
      res.redirect("/index.html");
    } catch(error) {
      return res.json({ message: "Ocorreu um erro ao cadastrar o cliente:", error: error.message });
    }
  }

  // LISTAR
  static async clientList(req, res) {
    const id = req.params.id;
    if (id) {
      const existentClient = await client.findOne({ where: { id: id } });
      res.json(existentClient);
    }
    else {
      const existentClient = await client.findAll({ raw: true });
      res.json(existentClient);
    }
  }

  // ATUALIZAR
  static async clientUpdate(req, res) {
    const id = req.clientId; // retrieve the client ID from the request
    const { name, email, password } = req.body;
    const existentClient = { name, email, password };
    await client.update(existentClient, { where: { id: id } });
    res.json({ message: "Cliente atualizado com sucesso!" });
  }

  // APAGAR
  static async clientDelete(req, res) {
    const id = req.clientId; // retrieve the client ID from the request
    await client.destroy({ where: { id: id } });
    res.json({ message: "Cliente apagado com sucesso!" });
  }
}