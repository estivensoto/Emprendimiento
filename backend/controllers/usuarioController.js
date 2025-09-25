const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registro = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;
    const existe = await Usuario.findOne({ where: { correo } });
    if (existe) return res.status(400).json({ mensaje: "Correo ya registrado" });

    const hash = await bcrypt.hash(password, 10);
    const nuevo = await Usuario.create({ nombre, correo, password: hash });

    res.json({ id: nuevo.id, nombre: nuevo.nombre, correo: nuevo.correo });
  } catch (e) {
    res.status(500).json({ mensaje: "Error en el registro" });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(400).json({ mensaje: "Credenciales inválidas" });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(400).json({ mensaje: "Credenciales inválidas" });

    const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (e) {
    res.status(500).json({ mensaje: "Error en el login" });
  }
};
