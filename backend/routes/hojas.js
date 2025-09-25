const express = require('express');
const router = express.Router();
const { HojaDeVida } = require('../models');

router.get('/', async (req, res) => {
  try {
    const hojas = await HojaDeVida.findAll();
    res.json(hojas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaHoja = await HojaDeVida.create(req.body);
    res.json(nuevaHoja);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
