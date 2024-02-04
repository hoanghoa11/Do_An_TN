
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagWork extends Model {
    static associate(models) {
      TagWork.belongsTo(models.Work, {
        foreignKey: "workId",
        targetKey: "id"
      })
    }
  };
  TagWork.init({
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
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
    modelName: 'TagWork',
  });
  return TagWork;
};