const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');

const db = knex({
    client: 'mysql',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});


const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/',(req, res) => {
    res.send("It's working");
})

app.post('/signin', (req, res) => {
    res.send("sigin Working")
    signin.handleSignin(req, res)
})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:userId', (req, res) => { profile.handleProfileGet(req, res, db) })

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running in port ${process.env.PORT}`); // The same as db url we put them in the host
})
