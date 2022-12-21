const { Student } = require('../models');

const studentdata = [



];

const seedStudent = () => Student.bulkCreate(studentdata);

module.exports = seedStudent;