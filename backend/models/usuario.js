module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  });
  Usuario.associate = (models) => {
    Usuario.hasOne(models.HojaDeVida, { foreignKey: "usuarioId" });
  };
  return Usuario;
};
