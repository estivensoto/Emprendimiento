const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models");
const usuarioRoutes = require("./routes/usuarioRoutes");
const hojaRoutes = require("./routes/hojaRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/hojas", hojaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
});
