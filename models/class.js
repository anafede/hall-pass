const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   class_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'class',
  }
);

module.exports = Class;