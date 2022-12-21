const { Grade } = require('../models');

const gradedata = [


    
];

const seedGrade = () => Grade.bulkCreate(gradedata);

module.exports = seedGrade;