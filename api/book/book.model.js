const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookName: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    releaseDate: {type: Date, default : null},
    bookImageName: {type: String, required: true},
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
});

const Book = mongoose.model('book', bookSchema)

module.exports = Book
