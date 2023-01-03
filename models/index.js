const User = require('./User');
const Class = require('./Class');
const Student = require('./Student');

Student.hasMany(Class, {
    foreignKey: 'student_id',
});

Class.belongsTo(Student, {
    foreignKey: 'student_id',
});

module.exports = {
    User,
    Class, 
    Student
}