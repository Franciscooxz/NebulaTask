// /project-management-app/server/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Ruta para obtener todas las tareas de un proyecto
router.get('/project/:projectId/tasks', taskController.getAllTasks);

// Ruta para obtener una tarea específica
router.get('/task/:taskId', taskController.getTaskById);

// Ruta para crear una nueva tarea en un proyecto
router.post('/project/:projectId/tasks', taskController.createTask);

// Ruta para actualizar una tarea existente
router.put('/task/:taskId', taskController.updateTask);

// Ruta para eliminar una tarea
router.delete('/task/:taskId', taskController.deleteTask);

module.exports = router;
