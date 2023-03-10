const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// passport
const passport = require('./authenticate/passport');

// Initialize Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

// Set up session and connect to our Sequelize database
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};




app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());


//
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/api/studentData', (req, res) => {
  console.info(`${req.method} request received for student data`);

  readFromFile('./public/seeds/studentData.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/api/studentData', (req, res) => {
  console.info(`${req.method} request received to add a student`);

  const { first_name, last_name, grade_name } = req.body;

  if (first_name && last_name && grade_name) {
    const newStudent = {
      first_name,
      last_name,
      grade_name,
    };

    readAndAppend(newStudent, './public/seeds/studentData.json');

    const response = {
      status: 'student added successfully',
      body: newStudent,
    }
  } else {
    res.errored('Error in adding student')
  }
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});



