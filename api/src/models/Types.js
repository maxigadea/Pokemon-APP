const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        //id: {
        // SEQUELIZE AUTODEFINE AL NO ACLARARLE;
        //}
    });
};