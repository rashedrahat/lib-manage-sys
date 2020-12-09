const userService = require('./user.service')

const signUpAsLibrarian = (req, res) => {
    const {name, email, password} = req.body
    const signUpUserInfo = {name, email, password, type: 'librarian'}

    //validation pass fail check
    //try catch

    if (true) {
        userService.create(signUpUserInfo).then(result => {
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
                data: {}
            })
        })
    } else {

    }
}

const signUpAsStudent = (req, res) => {
    const {name, email, password} = req.body
    const signUpUserInfo = {name, email, password, type: 'student'}

    //validation pass fail check
    //try catch

    if (true) {
        userService.create(signUpUserInfo).then(result => {
            if (result) {
                res.status(201).json({
                    success: true,
                    message: "Signed up successfully.",
                    data: result
                })
            }
        }).catch(err => {
            res.status(500).json({
                success: true,
                message: err,
                data: {}
            })
        })
    } else {

    }
}

module.exports = {
    signUpAsLibrarian,
    signUpAsStudent
}
