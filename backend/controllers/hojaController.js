const { HojaDeVida } = require("../models");

exports.guardarHoja = async (req, res) => {
  try {
    const { nombre_completo, telefono, direccion, experiencia, educacion } = req.body;

    const hoja = await HojaDeVida.create({
      nombre_completo,
      telefono,
      direccion,
      experiencia,
      educacion,
      archivo: req.file ? req.file.filename : null,
      usuarioId: req.user.id
    });

    res.json({ mensaje: "Hoja de vida guardada", hoja });
  } catch (e) {
    res.status(500).json({ mensaje: "Error al guardar hoja de vida" });
  }
};
