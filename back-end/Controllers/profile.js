const handleProfileGet = (req, res, db) => {
    const {
        userId
    } = req.params;
    console.log(userId);
    // Retrieve From MySql DB
    db.select("*")
        .from("CANDIDATE")
        .where('C_ID', '=', userId)
        .then(candidate => {
            if (candidate.length) {
                res.json(candidate);
            } else {
                res.status(400).json("Not found!!");
            }
        })
        .catch(err => res.status(400).json(err));
};
module.exports = {
    handleProfileGet: handleProfileGet
};