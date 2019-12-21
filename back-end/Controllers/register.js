const handleRegister = (req, res, db, bcrypt) => {
    const {
        C_ID,
        USERNAME,
        EMAIL,
        PASSWORD,
        TELEPHONE
    } = req.body;
    if (!C_ID ||
        !USERNAME ||
        !EMAIL ||
        !PASSWORD ||
        !TELEPHONE) {
        return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password);
    db('CANDIDATE').insert({
        C_ID: C_ID,
        USERNAME: USERNAME,
        EMAIL: EMAIL,
        PASSWORD: hash,
        TELEPHONE: TELEPHONE

    }).then(function (result) {
        res.json({
            success: true,
            message: 'ok'
        }); // respond back to request
    }).catch(err => res.status(400).json('unable to register!!'))

}
module.exports = {
    handleRegister: handleRegister
}

/**
 *
 */
/* 
db.transaction(trx => {
    trx.insert({
            PASSWORD: hash,
            EMAIL: email
        })
        .into('login')
        .returning('EMAIL')
        .then(loginEmail => {
            return trx('CANDIDATE')
                .returning('*')
                .insert({
                    USERNAME: name,
                    EMAIL: loginEmail[0],
                    TELEPHONE: TELEPHONE
                })
                .then(user => res.json(user[0]))
        })
        .then(trx.commit)
        .catch(trx.rollback)
})

*/