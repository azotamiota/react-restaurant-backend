const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        maxLength: [20, 'username length can be max 20 characters'],
        trim: true 
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)
