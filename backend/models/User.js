const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    zipcode: {type: Number, required: true},
    preferences: [{type: String, age: Number, size: String, gender: String, tags: [String]}],
    favorites: [{}] 
        }   
)

const User = mongoose.model('User', userSchema)

module.exports = User