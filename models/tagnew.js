const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagNew extends Model {
    static associate(models) {
      TagNew.belongsTo(models.Tag, {
        foreignKey: "tagId",
        targetKey: "id"
      });
      TagNew.belongsTo(models.New, {
        foreignKey: "newId",
        targetKey: "id"
      })
    }
  };
  TagNew.init({
    newId: {
      type: DataTypes.INTEGER,
      references: {
        model: "New",
        key: "id"
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'TagNew',
  });
  return TagNew;
};