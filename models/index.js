const User = require('./User');
const Class = require('./Class');
const Student = require('./Student');

Student.hasMany(Class, {
    foreignKey: 'course_name',
    foreignKey: 'course_grade'
});

Class.belongsTo(Student, {
    foreignKey: 'course_name',
    foreignKey: 'course_grade'
});

module.exports = {
    User,
    Class, 
    Student
}