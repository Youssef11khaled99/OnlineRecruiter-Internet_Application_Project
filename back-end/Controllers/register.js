const handleRegister = (req, res, db, bcrypt) => {
    const {
        USERNAME,
        EMAIL,
        PASSWORD,
        TELEPHONE
    } = req.body;
    if (!USERNAME ||
        !EMAIL ||
        !PASSWORD ||
        !TELEPHONE) {
        return res.status(400).json('incorrect form submission');
    }
    //const hash = bcrypt.hashSync(PASSWORD);
    db('candidate').insert({
            USERNAME: USERNAME,
            EMAIL: EMAIL,
            PASSWORD: PASSWORD,
            TELEPHONE: TELEPHONE

        })
        .then(function (result) {
            res.json({
                success: true,
                message: 'ok',
                result: result
            }); // respond back to request
        }).catch(err => res.status(400).json(err))
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