const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationCompany extends Model {
    static associate(models) {
      NotificationCompany.belongsTo(models.Company)
    }
  };
  NotificationCompany.init({
    companyId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Company",
        key: "id"
      }
    },
    messager: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotificationCompany',
  });
  return NotificationCompany;
};