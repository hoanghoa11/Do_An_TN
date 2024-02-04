const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfWork extends Model {
    static associate(models) {
      TypeOfWork.belongsToMany(models.Work, {
        through: "WorkTypeOfWorks"
      })
      TypeOfWork.belongsToMany(models.User, {
        through: "UserTypeOfWorks"
      })
    }
  };
  TypeOfWork.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeOfWork',
  });
  return TypeOfWork;
};