// /project-management-app/server/controllers/taskController.js

const Task = require('../models/Task');

// Obtener todas las tareas de un proyecto
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { projectId: req.params.projectId } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
};

// Crear una nueva tarea en un proyecto
exports.createTask = async (req, res) => {
  const { name, description, projectId } = req.body;

  try {
    const task = await Task.create({ name, description, projectId });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la tarea' });
  }
};

// Actualizar una tarea existente
exports.updateTask = async (req, res) => {
  const { name, description } = req.body;

  try {
    const task = await Task.findByPk(req.params.taskId);

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    task.name = name;
    task.description = description;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la tarea' });
  }
};

// Eliminar una tarea existente
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.taskId);

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    await task.destroy();

    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};
