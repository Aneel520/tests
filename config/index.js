
const Sequelize = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'root123', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
