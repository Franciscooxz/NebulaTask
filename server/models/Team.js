// /project-management-app/server/models/Team.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Team = sequelize.define('Team', {
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
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Team;