'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserRole extends Model {
        static associate(models) {
            UserRole.belongsTo(models.User, {
                foreignKey: "userId",
                targetKey: "id"
            })
        }
    };
    UserRole.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id"
            }
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Role",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: 'UserRole',
    });
    return UserRole;
};