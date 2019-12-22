var express = require("express");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var path = require("path");
var LocalStrategy = require('passport-local');
var passport = require('passport');
const router = express.Router();


const db = require('./src/Models/db');

const examRouter = require("./src/Routes/examRouter");
const hrRouter = require("./src/Routes/hrRouter");
const candidateRouter = require("./src/Routes/candidateRouter");

const app = express();
app.use(cors());

// Configure app to user bodyParser & the routes
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
);

app.use('/hr', hrRouter);
app.use('/candidate', candidateRouter);
app.use('/exam', examRouter);
app.use('/examType', examTypeRouter);





app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/Views/index.html"));
});

app.get("/home", (req, res) => {
    if (req.session.loggedin) {
        res.send("Welcome back, " + req.session.username + "!");
    } else {
        res.send("Please login to view this page!");
    }
    res.end();
});

app.listen(process.env.PORT || 5500, () => {
    console.log(`app is running in port 5500`); 
});
