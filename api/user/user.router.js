const userController = require('./user.controller')
const router = require('express').Router()
const reqBodyValidators = require('../../middlewares/reqBodyValidators')

router.post('/register/librarian', reqBodyValidators.validate('register'), userController.register)
router.post('/register/student', reqBodyValidators.validate('register'), userController.register)

router.post('/login/librarian', reqBodyValidators.validate('login'), userController.login)
router.post('/login/student', reqBodyValidators.validate('login'), userController.login)

module.exports = router
