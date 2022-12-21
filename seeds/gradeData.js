const { Grade } = require('../models');

const gradedata = [
{
    letter_grade: 'A+',
    
  },
  {
    letter_grade: 'A',
    
  },
  {
    letter_grade: 'A-',
    
  },
  {
    letter_grade: 'B+',
   
  },
  {
    letter_grade: 'B',
    
  },
  {
    letter_grade: 'B-',
    
  },
  {
    letter_grade: 'C+',
  },
  {
    letter_grade: 'C',
    
  },
  {
    letter_grade: 'C-',
    
  },
  {
    letter_grade: 'D+',
  },
  {
    letter_grade: 'D',
  },
  {
    letter_grade: 'D-',
  },
  {
    letter_grade: 'F',
  },


];

const seedGrade = () => Grade.bulkCreate(gradedata);

module.exports = seedGrade;