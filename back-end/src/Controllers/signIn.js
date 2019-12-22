const handleSignIn = (req, res, db, bcrypt) => {
    console.log("yess");
    // Retrieve From the DB
    console.log(req.body)
    const {
        EMAIL,
        PASSWORD
    } = req.body;
    console.log(EMAIL);
    console.log(PASSWORD);
    if (!EMAIL || !PASSWORD) {
        return res.status(400).json('incorrect form submission');
    }
    db.from('candidate').select('*')
        .where('EMAIL', '=', EMAIL)
        .andWhere('PASSWORD', '=', PASSWORD)
        .then(user => {
            req.session.loggedin = true;
            req.session.username = user[0]["USERNAME"];
            res.redirect('/home');
            //res.json(req.session.username)
        })
        .catch(err => res.status(400).json('wrong credentials \n' + err))

    // Retrieve from the MySql DB 
    //db.select('*').from('candidate')
    // .where('EMAIL', '=', EMAIL)
    // .andWhere('PASSWORD', '=', PASSWORD)
    // .then(user => res.json(user))
    // .catch(err => res.status(400).json('wrong credentials \n' + err))
}
module.exports = {
    handleSignIn
}
/**
 * db.select('*').from('candidate')
     .then((result) => {
         res.json(result)
     }).catch((err) => {
         res.status(400).json(err)
     });
 */