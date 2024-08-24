const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Certifique-se de que o caminho está correto

class Endereco extends Model {}

Endereco.init({
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      is: /^\d{5}-\d{3}$/
    }
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Endereco',
  tableName: 'enderecos'
});

module.exports = Endereco;
