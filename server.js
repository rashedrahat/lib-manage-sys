const express = require('express')
const db = require('./config/db')
require('dotenv').config()
const userRouter = require('./api/user/user.router')

const app = express()

db.connect()

app.use(express.json())
app.use('/api/auth', userRouter)

app.listen(process.env.PORT, () => console.log(`Server started ${process.env.PORT}...`))
