const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');
const hojasRoutes = require('./routes/hojas');

app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/hojas', hojasRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
