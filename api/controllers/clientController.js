const client = require("../models/clientModel");
module.exports = class clientController {

  // VERIFICAR LOGIN
  static async clientVerify(req, res) {
    const { email, name, password } = req.body;
    const data = {
      $or: [
        { email: email },
        { name: name }
      ],
      password: password
    };
    const client = await client.findOne({ where: data }).then((client) => {
      if (client != undefined) {
        const id = client.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300
        });
        return res.json({ auth: true, token: token });
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
      req.clientId = decoded.id;
      next();
    });
  }

  // CRIAR
  static async clientCreate(req, res) {
    const { name, email, password } = req.body;
    const client = { name, email, password };
    try {
      const newclient = await client.create(client);
      return res.json({ message: "Cadastro realizado com sucesso:", newclient});
    } catch(error) {
      return res.json({ message: "Ocorreu um erro ao cadastrar o cliente:", error: error.message });
    }
  }

  // LISTAR
  static async clientList(req, res) {
    const id = req.params.id;
    if (id) {
      const client = await client.findOne({ where: { id: id } });
      res.json(client);
    }
    else {
      const client = await client.findAll({ raw: true });
      res.json(client);
    }
  }

  // ATUALIZAR
  static async clientUpdate(req, res) {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const client = { name, email, password };
    await client.update(client, { where: { id: id } });
    res.json({ message: "Cliente atualizado com sucesso!" });
  }

  // APAGAR
  static async clientDelete(req, res) {
    const id = req.params.id;
    await client.destroy({ where: { id: id } });
    res.json({ message: "Cliente apagado com sucesso!" });
  }
}
