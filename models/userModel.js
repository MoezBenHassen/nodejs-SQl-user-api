//const {sequelize} = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define ("user", {
        login: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mdp: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })

    return User
}

