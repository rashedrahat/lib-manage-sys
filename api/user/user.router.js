const userController = require('./user.controller')
const router = require('express').Router()

router.post('/register/librarian', userController.signUpAsLibrarian)
router.post('/register/student', userController.signUpAsStudent)

module.exports = router
