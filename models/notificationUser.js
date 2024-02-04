const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationUser extends Model {
    static associate(models) {
      NotificationUser.belongsTo(models.User)
    }
  };
  NotificationUser.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
    message: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotificationUser',
  });
  return NotificationUser;
};