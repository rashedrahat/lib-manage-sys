const bookModel = require('./book.model')

const insert = (data) => {
    return bookModel.create(data)
}

const findById = id => {
    return bookModel.find({_id : id})
}

const findByIdAndUpdate = (id, data) => {
    return bookModel.findByIdAndUpdate(id, data)
}

module.exports = {
    insert,
    findById,
    findByIdAndUpdate
}
