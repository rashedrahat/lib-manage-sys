const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const fs = require('fs')
const bookService = require('./book.service')

const insertBook = async (req, res) => {
    try {
        jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                console.log(err)
                res.status(403).json({
                    message: "Invalid token provided!"
                });
            } else {
                console.log(req.body)
                console.log(req.file)
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    if (req.file !== undefined) {
                        // console.log("Going for file deletion..")
                        fs.unlink(app__basedir + "/assets/uploads/" + req.file.filename, (err) => {
                            if (err) {
                                console.log(err)
                                res.json({
                                    success: false,
                                    message: "Something went wrong!",
                                })
                            }
                            // console.log("File removed.")
                        })
                    }
                    res.status(400).json({
                        success: false,
                        message: "Validation failure!",
                        errors: errors.array()
                    })
                } else {
                    if (req.file == undefined) {
                        res.status(400).json({
                            success: false,
                            message: "Please upload a file!"
                        })
                    } else {
                        const {bookName, author, genre, status} = req.body
                        const bookInfo = {
                            bookName,
                            author,
                            genre,
                            status: status.toLowerCase().includes(['active, inactive']) ? status.toLowerCase() : 'active',
                            bookImageName: req.file.filename
                        }
                        bookService.insert(bookInfo).then(result => {
                            if (result) {
                                res.status(201).json({
                                    success: true,
                                    message: "Added successfully.",
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
            }
        });
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            message: "Something went wrong!",
        })
    }
}

const updateBook = async (req, res) => {
    try {
        jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
            if (err) {
                console.log(err)
                res.status(403).json({
                    message: "Invalid token provided!"
                });
            } else {
                console.log(req.body)
                console.log(req.file)
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    if (req.file !== undefined) {
                        // console.log("Going for file deletion..")
                        fs.unlink(app__basedir + "/assets/uploads/" + req.file.filename, (err) => {
                            if (err) {
                                console.log(err)
                                res.json({
                                    success: false,
                                    message: "Something went wrong!",
                                })
                            }
                            // console.log("File removed.")
                        })
                    }
                    res.status(400).json({
                        success: false,
                        message: "Validation failure!",
                        errors: errors.array()
                    })
                } else {
                    const result = await bookService.findById(req.params.id);
                    if (result.length == 0) {
                        if (req.file !== undefined) {
                            // console.log("Going for file deletion..")
                            fs.unlink(app__basedir + "/assets/uploads/" + req.file.filename, (err) => {
                                if (err) {
                                    console.log(err)
                                    res.json({
                                        success: false,
                                        message: "Something went wrong!",
                                    })
                                }
                                // console.log("File removed.")
                            })
                        }
                        res.status(400).json({
                            success: false,
                            message: "Not found any book to update!",
                        })
                    } else {
                        const bookDetails = result[0]
                        const {bookName, author, genre, status} = req.body
                        const bookInfo = {
                            bookName,
                            author,
                            genre,
                            status: status.toLowerCase().includes(['active, inactive']) ? status.toLowerCase() : 'active',
                            bookImageName: req.file !== undefined ? req.file.filename : bookDetails.bookImageName
                        }
                        bookService.findByIdAndUpdate(req.params.id, bookInfo).then(result => {
                            console.log(result)
                            if (result) {
                                res.status(200).json({
                                    success: true,
                                    message: "Updated successfully.",
                                    data: result
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                            res.status(400).json({
                                success: false,
                                message: err,
                            })
                        })
                    }
                }
            }
        });
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            message: "Something went wrong!",
        })
    }
}

module.exports = {
    insertBook,
    updateBook
}
