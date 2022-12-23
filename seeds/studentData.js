const { Student } = require('../models');

const studentData = [
{
    name: 'David Beckham',
    grade: 'Sophomore',
    
  },
  {
    name: 'Marcus Rashford',
    grade: 'Freshman',
    
  },
  {
    name: 'Chrisian Pulisic',
    grade: 'Freshman',
    
  },
  {
    name: 'Steve Nash',
    grade: 'Junior',
   
  },
  {
    name: 'Serena Williams',
    grade: 'Sophomore',
    
  },
  {
    name: 'Martha Stewart',
    grade: 'Senior',
    
  },
  {
    name: 'Simone Biles',
    grade: 'Junior',
  },
  {
    name: 'Alex Morgan',
    grade: 'Junior',
    
  },
  {
    name: 'Connor McGreggor',
    grade: 'Senior',
    
  },
  {
    name: 'Stephan Curry',
    grade: 'Freshman',
},


];

const seedStudent = () => Student.bulkCreate(studentData);

module.exports = seedStudent;