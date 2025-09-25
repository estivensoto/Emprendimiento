module.exports = (sequelize, DataTypes) => {
  const HojaDeVida = sequelize.define('HojaDeVida', {
    nombre_completo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    experiencia: DataTypes.TEXT,
    educacion: DataTypes.TEXT,
    archivo: DataTypes.STRING
  });
  return HojaDeVida;
};
