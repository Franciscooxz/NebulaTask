// File: /project-management-app/server/models/Task.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
    allowNull: false,
    defaultValue: 'To Do'
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  assignedTo: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Task;
