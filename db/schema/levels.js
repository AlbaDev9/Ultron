
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: String,
    Guild: String,
    experience: {
        "type": Number,
        "default": 0
    },

    level: {
        "type": Number,
        "default": 0
    },
})

module.exports = mongoose.model('level', Schema)