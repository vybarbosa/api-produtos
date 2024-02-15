const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.TABLE_NAME, process.env.LOGIN_DATABASE, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = { sequelize };