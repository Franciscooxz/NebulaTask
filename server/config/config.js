// server/config/config.js

module.exports = {
  development: {
    database: 'project_management_app',
    username: 'your_username',
    password: 'your_password',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  test: {
    database: 'project_management_app_test',
    username: 'your_username',
    password: 'your_password',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  production: {
    database: 'project_management_app_production',
    username: 'your_username',
    password: 'your_password',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
};
