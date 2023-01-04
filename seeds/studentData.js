const { Student } = require('../models');

const studentData = [ 
{
    first_name: 'David',
    last_name: 'Beckham',
    grade_name: 'Sophomore',
    
  },
  {
    first_name: 'Marcus',
    last_name: ' Rashford',
    grade_name: 'Freshman',
    
  },
  {
    first_name: 'Chrisian',
    last_name: 'Pulisic',
    grade_name: 'Freshman',
    
  },
  {
    first_name: 'Steve',
    last_name: ' Nash',
    grade_name: 'Junior',
   
  },
  {
    first_name: 'Serena ',
    last_name: 'Williams',
    grade_name: 'Sophomore',
    
  },
  {
    first_name: 'Martha ',
    last_name: 'Stewart',
    grade_name: 'Senior',
    
  },
  {
    first_name: 'Simone',
    last_name: 'Biles',
    grade_name: 'Junior',
  },
  {
    first_name: 'Alex',
    last_name: 'Morgan',
    grade_name: 'Junior',
    
  },
  {
    first_name: 'Connor',
    last_name: 'McGreggor',
    grade_name: 'Senior',
    
  },
  {
    first_name: 'Stephen',
    last_name: 'Curry',
    grade_name: 'Freshman',
},


];

const seedStudent = () => Student.bulkCreate(studentData);

module.exports = seedStudent;