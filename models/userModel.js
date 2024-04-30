const { DataTypes } = require('sequelize')
const sequelize = require('../config/index')

const UserDetails = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    username:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    password_hash:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps: false 
})

module.exports = UserDetails;