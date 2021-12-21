
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: String,
    Guild: String,
    daily: {
        "type": Date,
        "default": 0
    },
})

module.exports = mongoose.model('daily', Schema)