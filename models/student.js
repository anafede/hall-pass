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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_name: {
      type: DataTypes.STRING,
      references: {
        model: 'class',
        key: 'class_name',
      },
    },
    course_grade: {
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        id: 'grade',
      },
    },
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