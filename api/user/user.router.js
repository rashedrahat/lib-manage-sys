const userController = require('./user.controller')
const router = require('express').Router()
const reqBodyValidators = require('../../middlewares/reqBodyValidators')

router.post('/register/librarian', reqBodyValidators.validate('register'), userController.registerAsLibrarian)
router.post('/register/student', reqBodyValidators.validate('register'), userController.registerAsStudent)

module.exports = router
