const express = require('express');
const router = express.Router();

let usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];

// GET http://localhost:3000/api/usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET http://localhost:3000/api/usuarios/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// POST http://localhost:3000/api/usuarios
router.post('/', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: 'El nombre es requerido' });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

module.exports = router;
