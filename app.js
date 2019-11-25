const express = require('express')
const app = express()
const mongoose = require('./db/mongoose')

const userRouter = require('./routes/router')

const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)





app.listen(port)