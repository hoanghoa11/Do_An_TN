const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Work),
        Company.belongsToMany(models.User, {
          through: "Recruitments"
        }),
        Company.hasMany(models.NotificationCompany)
    }
  };
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    nation: DataTypes.STRING,
    scale: DataTypes.STRING,
    role: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING(500),
    banner: DataTypes.STRING(500),
    introduce: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};