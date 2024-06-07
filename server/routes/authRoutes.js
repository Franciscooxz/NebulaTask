// /project-management-app/server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el registro de usuarios
router.post('/register', authController.register);

// Ruta para el inicio de sesión de usuarios
router.post('/login', authController.login);

module.exports = router;
