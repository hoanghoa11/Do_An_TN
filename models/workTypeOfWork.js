const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkTypeOfWork extends Model {
    static associate(models) {
      WorkTypeOfWork.belongsTo(models.Work, {
        foreignKey: "workId",
        targetKey: "id"
      })
    }
  };
  WorkTypeOfWork.init({
    typeofworkId: {
      type: DataTypes.INTEGER,
      references: {
        model: "TypeOfWork",
        key: "id"
      }
    },
    workId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Work",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'WorkTypeOfWork',
  });
  return WorkTypeOfWork;
};