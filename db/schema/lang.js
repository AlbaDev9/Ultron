const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: String,
    Guild: String,
    activate : {
        type :String,
        default : "fr"
    }
})

module.exports = mongoose.model('lang', Schema)