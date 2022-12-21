const { Class } = require('../models');

const classdata = [
{
    class_subject: 'Biology',
    
  },
  {
    class_subject: 'History',
    
  },
  {
    class_subject: 'Physics',
    
  },
  {
    class_subject: 'English',
   
  },
  {
    class_subject: 'Geometry',
    
  },
  {
    class_subject: 'Spanish',
    
  },
  {
    class_subject: 'Chemisty',
  },
  {
    class_subject: 'Italian',
    
  },
  {
    class_subject: 'Physical Education',
    
  },
  {
    class_subject: 'Algebra',
  },


];

const seedclass = () => Class.bulkCreate(classdata);

module.exports = seedclass;