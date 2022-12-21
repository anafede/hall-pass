const { Student } = require('../models');

const studentdata = [



];

const seedStudent = () => student.bulkCreate(studentdata);

module.exports = seedStudent;