const sequelize = require('../config/connection');
const seedClass = require('./classData');
const seedGrade = require('./gradeData');
const seedStudent = require('./studentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedClass();
    // await seedGrade();
    await seedStudent();
    process.exit(0);
};

seedAll();