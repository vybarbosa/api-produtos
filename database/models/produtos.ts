const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize.js');

const Produtos = sequelize.define('Produtos', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE, // Altere para DataTypes.DATE ou DataTypes.DATE(6) para armazenar a data e a hora
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Produtos;