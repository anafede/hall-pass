const router = require('express').Router();
const { Student, Class, Grade } = require('../models');

// GET all students for homepage
router.get('/', async (req, res) => {
    try {
        const dbStudentData = await Student. 
        findAll({
            include: [
                {
                    model: Student,
                    attributes: [],
                },
            ],
        });

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
                    model: Student,
                    attributes: [],
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

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;