'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserTag extends Model {
        static associate(models) {
            UserTag.belongsTo(models.Tag, {
                foreignKey: "tagId",
                targetKey: "id"
            });
            UserTag.belongsTo(models.User, {
                foreignKey: "userId",
                targetKey: "id"
            })
        }
    };
    UserTag.init({
        tagId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'UserTag',
    });
    return UserTag;
};