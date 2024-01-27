'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTypeOfWork extends Model {
    static associate(models) {
    }
  };
  UserTypeOfWork.init({
    typeofworkId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserTypeOfWork',
  });
  return UserTypeOfWork;
};