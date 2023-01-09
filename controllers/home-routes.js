const router = require('express').Router();
const { Student, Class } = require('../models');

var passport = require('../authenticate/passport')

// GET all students for homepage
router.get('/', async (req, res) => {
    try {
        const dbStudentData = await Student. 
        findAll();

        const students = dbStudentData.map
        ((student) =>
            student.get({ plain: true })
        );
        res.render('homepage', {
            students,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one student
router.get('/student/:id', async (req, res) => {
    try {
        const dbStudentData = await Student.
        findByPk(req.params.id, {
            include: [
                {
                    model: Class,
                    attributes: [
                        'id',
                        'class_name',
                        'grade'
                    ],
                },
            ],
        });

        const student = dbStudentData.get({
            plain: true
        });
        res.render('student', { 
            student,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET classes for each student
router.get('/class/:id', async (req, res) =>
{
    try {
        const dbClassData = await Class.
        findByPk(req.params.id);

        const classes = dbClassData.get({ plain: true });
        res.render('class', { 
            classes, 
            loggedIn: req.session.loggedIn 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;