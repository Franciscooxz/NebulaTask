// /project-management-app/server/app.js

const express = require('express');
const app = express();
const port = 3000;

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

// Configurar middleware
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
