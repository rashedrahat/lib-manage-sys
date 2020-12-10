const express = require('express')
const db = require('./config/db')
require('dotenv').config()
const userRouter = require('./api/user/user.router')
const bookRouter = require('./api/book/book.router')
const bodyParser = require('body-parser')

const app = express()

const __basedir = __dirname;
global.app__basedir = __basedir;

db.connect()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth', userRouter)
app.use('/api/book', bookRouter)

app.listen(process.env.PORT, () => console.log(`Server started ${process.env.PORT}...`))
