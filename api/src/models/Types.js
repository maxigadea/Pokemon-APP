const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('types', {
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