const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;