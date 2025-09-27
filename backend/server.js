const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');
const hojasRoutes = require('./routes/hojas');

app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/hojas', hojasRoutes);

// Usar el puerto que Render (o el host) asigne, o 3000 en local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
