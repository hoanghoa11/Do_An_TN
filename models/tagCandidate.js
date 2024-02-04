const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagCandidate extends Model {
    static associate(models) {
    }
  };
  TagCandidate.init({
    candidateId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Candidate",
        key: "userId"
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
    modelName: 'TagCandidate',
  });
  return TagCandidate;
};