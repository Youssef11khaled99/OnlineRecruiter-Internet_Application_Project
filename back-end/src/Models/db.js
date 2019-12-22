const knex = require("knex");

const db = knex({
    client: "mysql",
    // connection: {
    //     host: "sql7.freemysqlhosting.net",
    //     user: "sql7316459",
    //     password: "CXnZqH3VKJ",
    //     database: "sql7316459",
    //     port: "3306"
    // }

    // Local
    connection: {
        user: "root",
        password: "1234",
        database: "online_recruiter"
    }

    // Heroku
    // connection: {
    //     host: process.env.CLEARDB_DATABASE_URL,
    //     user: "b2035d16df9aff",
    //     password: "21a8ce89",
    //     database: "heroku_03eef9978fdc76d",
    //     port: "3306"
    // }
});

module.exports = {
    db
}