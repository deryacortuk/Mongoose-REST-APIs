const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/rest-api'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})