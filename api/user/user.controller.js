const userService = require('./user.service')
const {validationResult} = require('express-validator');

const registerAsLibrarian = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const registerUserInfo = {name, email, password, type: 'librarian'}

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                message: "Validation failure!",
                errors: errors.errors
            })
        } else {
            const result = await userService.findByEmail(email);
            if(result.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "This email belongs to an existing registered user! Choose something else.",
                })
            } else {
                userService.create(registerUserInfo).then(result => {
                    if (result) {
                        res.status(201).json({
                            success: true,
                            message: "Signed up successfully.",
                            data: result
                        })
                    }
                }).catch(err => {
                    res.status(400).json({
                        success: false,
                        message: err,
                    })
                })
            }
        }
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            message: "Something went wrong!",
        })
    }
}

const registerAsStudent = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const registerUserInfo = {name, email, password, type: 'student'}

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                message: "Validation failure!",
                errors: errors.errors
            })
        } else {
            const result = await userService.findByEmail(email);
            if(result.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "This email belongs to an existing registered user! Choose something else.",
                })
            } else {
                userService.create(registerUserInfo).then(result => {
                    if (result) {
                        res.status(201).json({
                            success: true,
                            message: "Signed up successfully.",
                            data: result
                        })
                    }
                }).catch(err => {
                    res.status(400).json({
                        success: false,
                        message: err,
                    })
                })
            }
        }
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            message: "Something went wrong!",
        })
    }
}

module.exports = {
    registerAsLibrarian,
    registerAsStudent
}
