const { Class } = require('../models');

const classdata = [


    
];

const seedclass = () => Class.bulkCreate(classdata);

module.exports = seedclass;