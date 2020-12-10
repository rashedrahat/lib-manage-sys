const bookController = require('./book.controller')
const router = require('express').Router()
const reqBodyValidators = require('../../middlewares/reqBodyValidators')
const verifyToken = require('../../middlewares/verifyToken')
const uploadFileMiddleware = require('../../middlewares/fileUpload')

router.post('/add', verifyToken.verifyToken, uploadFileMiddleware, reqBodyValidators.validate('addBook'), bookController.insertBook)
router.put('/update/:id', verifyToken.verifyToken, uploadFileMiddleware, reqBodyValidators.validate('addBook'), bookController.updateBook)

module.exports = router
