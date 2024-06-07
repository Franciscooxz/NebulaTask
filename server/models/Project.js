// /project-management-app/server/models/Project.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Not Started', 'In Progress', 'Completed'),
    defaultValue: 'Not Started',
    allowNull: false,
  },
});

module.exports = Project;