const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Grade extends Model {}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    grade_value: {
    //   type: 
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'grade',
  }
);

module.exports = Grade;