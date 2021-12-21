const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild : String,
    message : String, 
})

module.exports = mongoose.model('welcomeMessage', Schema)