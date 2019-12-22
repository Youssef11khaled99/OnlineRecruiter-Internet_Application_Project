const passport = require('passport');
const db = require('../Models/db');
const { check, validationResult } = require('express-validator');


export const create = [
    [
        check('email').isEmail(),
        check('name').exists(),
        check('username').exists(),
        check('password').exists(),
        check('telephone').optional()
    ],
    async function create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { EMAIL, USERNAME, PASSWORD, TELEPHONE, USERNAME } = req.body;
        // na2s check if exists
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
];

export const login = [
    [check('email').isEmail(), check('password').exists()],
    passport.authenticate('local'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        if (req.isAuthenticated()) {
            res.status(200).end();
        } else {
            res.status(401).end();
        }
    }
];