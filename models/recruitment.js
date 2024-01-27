'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Recruitment extends Model {
        static associate(models) {
        }
    };
    Recruitment.init({
        companyId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Company",
                key: "id"
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id"
            }
        },
        messager: DataTypes.STRING,
        link: DataTypes.STRING,
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Recruitment',
    });
    return Recruitment;
};