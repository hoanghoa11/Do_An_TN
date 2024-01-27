'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SaveWork extends Model {
        ssociate(models) {
        }
    };
    SaveWork.init({
        userId: DataTypes.INTEGER,
        workId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SaveWork',
    });
    return SaveWork;
};