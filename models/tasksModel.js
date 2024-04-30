const {DataTypes} = require('sequelize')
const sequelize = require('../config/index')
const UserDetails = require('./userModel')


const TaskDetails = sequelize.define('tasks',  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    assignee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserDetails,
            key: 'id' 
        }
    },
    title:{
        type:DataTypes.TEXT,
    },
    description:{
        type:DataTypes.TEXT
    },
    status:{
        type:DataTypes.TEXT
    },

})





module.exports = TaskDetails;
