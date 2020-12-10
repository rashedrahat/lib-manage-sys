const bookModel = require('./book.model')

const insert = (data) => {
    return bookModel.create(data)
}

/*const findByEmail = email => {
    return bookModel.find({email})
}*/

module.exports = {
    insert,
    // findByEmail
}
