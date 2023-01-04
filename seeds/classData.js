const { Class } = require('../models');

const classData = [
{
    class_name: 'Biology',
    
  },
  {
    class_name: 'History',
    
  },
  {
    class_name: 'Physics',
    
  },
  {
    class_name: 'English',
   
  },
  {
    class_name: 'Geometry',
    
  },
  {
    class_name: 'Spanish',
    
  },
  {
    class_name: 'Chemisty',
  },
  {
    class_name: 'Italian',
    
  },
  {
    class_name: 'Physical Education',
    
  },
  {
    class_name: 'Algebra',
  },


];

const seedclass = () => Class.bulkCreate(classData);

module.exports = seedclass;