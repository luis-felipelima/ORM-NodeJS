/* eslint-disable no-unused-vars */
// 'use strict';
const { Model } = require('sequelize');

function modelPessoa(sequelize, DataTypes) {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  Pessoas.associate = function (models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id',
    });
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
    });
  };
  return Pessoas;
}

export default modelPessoa;
