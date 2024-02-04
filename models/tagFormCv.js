const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagFormCV extends Model {
    static associate(models) {
      TagFormCV.belongsTo(models.Tag, {
        foreignKey: "tagId",
        targetKey: "id"
      });
      TagFormCV.belongsTo(models.FormCV, {
        foreignKey: "formCVId",
        targetKey: "id"
      })
    }
  };
  TagFormCV.init({
    tagId: DataTypes.INTEGER,
    formCVId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TagFormCV',
  });
  return TagFormCV;
};