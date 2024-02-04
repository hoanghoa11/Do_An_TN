'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      New.belongsTo(models.User),
        New.belongsToMany(models.Tag, {
          through: "TagNews"
        }),
        New.hasMany(models.TagNew, { foreignKey: 'newId', as: "tagnew" })
    }
  };
  New.init({
    name: DataTypes.STRING,
    samary: DataTypes.STRING,
    content: DataTypes.STRING,
    avatar: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      }
    },
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'New',
  });
  return New;
};