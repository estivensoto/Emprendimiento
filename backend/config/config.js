const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'nombre_base_datos', 
  'usuario',           
  'password',          
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;
