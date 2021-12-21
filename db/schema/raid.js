const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: String,
    Guild: String,
    activate : {
        type :String,
        default : "off"
    }
})

module.exports = mongoose.model('raid', Schema)