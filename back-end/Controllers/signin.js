const handleSignIn = (req, res, db) => {
    const {
        EMAIL,
        PASSWORD
    } = req.body;
    if (!EMAIL || !PASSWORD) {
        return res.status(400).json('incorrect form submission');
    }
    // Retrieve from the MySql DB 
    db.select('*').from('candidate')
        .where('EMAIL', '=', EMAIL)
        .andWhere('PASSWORD', '=', PASSWORD)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('wrong credentials \n' + err))
}
module.exports = {
    handleSignIn
}