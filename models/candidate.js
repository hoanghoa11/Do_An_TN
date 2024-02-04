const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
   
    static associate(models) {
      Candidate.belongsTo(models.User),
        Candidate.belongsToMany(models.Tag, {
          through: "TagCandidates"
        })
    }
  };
  Candidate.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
    target: DataTypes.STRING,
    prize: DataTypes.STRING,
    certificate: DataTypes.STRING,
    interest: DataTypes.STRING,
    presenters: DataTypes.STRING,
    education: DataTypes.STRING,
    experience: DataTypes.STRING,
    activate: DataTypes.TEXT,
    project: DataTypes.STRING,
    moreInformation: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};