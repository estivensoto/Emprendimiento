const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Usuario = require('./usuario')(sequelize, DataTypes);
const HojaDeVida = require('./HojaDeVida')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Usuario,
  HojaDeVida
};
