// project-management-app/server/controllers/projectController.js

const Project = require('../models/Project');

// Obtener todos los proyectos
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los proyectos' });
  }
};

// Obtener un proyecto por su ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el proyecto' });
  }
};

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = await Project.create({ name, description });
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el proyecto' });
  }
};

// Actualizar un proyecto existente
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    project.name = name;
    project.description = description;
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el proyecto' });
  }
};

// Eliminar un proyecto existente
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    await project.destroy();
    res.status(200).json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el proyecto' });
  }
};
