const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialNetwork extends Model {
    static associate(models) {
    }
  };
  SocialNetwork.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    icon: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SocialNetwork',
  });
  return SocialNetwork;
};