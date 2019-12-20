const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");

const db = knex({
    client: "mysql",
    connection: {
        host: "sql7.freemysqlhosting.net",
        user: "sql7316459",
        password: "CXnZqH3VKJ",
        database: "sql7316459",
        port: "3306"
    }

    // We will change to this after deploying on Heroku
    // connection: {
    //     host: process.env.CLEARDB_DATABASE_URL,
    //     user: "b2035d16df9aff",
    //     password: "21a8ce89",
    //     database: "heroku_03eef9978fdc76d",
    //     port: "3306"
    // }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("It's working");
});

app.get("/signin", (req, res) => {
    res.send("sigin Working");
    signin.handleSignin(req, res);
});

app.post("/register", (req, res) => {
    register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:userId", (req, res) => {
    profile.handleProfileGet(req, res, db);
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running in port ${process.env.PORT}`); // The same as db url we put them in the host
});