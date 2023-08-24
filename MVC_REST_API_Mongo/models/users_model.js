const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    fullName: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
   

})

module.exports = mongoose.model('user', userSchema)