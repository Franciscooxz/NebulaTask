// /project-management-app/server/routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const userController = require('../controllers/userController');

// Rutas para la gestión de usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
