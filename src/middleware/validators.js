const { check, validationResult } = require("express-validator");

const login = [
    check("user")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    (req , res , next ) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (err) {
            res.status(403);
            res.send({errors : err.array() })
        }
    }
]

const validatorCreate = [
    check("name")
    .exists()
    .notEmpty(),
    (req , res , next ) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (err) {
            res.status(403);
            res.send({errors : err.array() })
        }
    }
]

const validatorUpdate = [
    check("name")
    .exists()
    .notEmpty(),
    (req , res , next ) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (err) {
            res.status(403);
            res.send({errors : err.array() })
        }
    }
]

const validatorCreateUser = [
    check("user")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    check("status")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    (req , res , next ) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (err) {
            res.status(403);
            res.send({errors : err.array() })
        }
    }
]

module.exports = { login,validatorCreate,validatorUpdate,validatorCreateUser };