const mongoose = require('mongoose')
let Shema = new mongoose.Schema({
    guildid : String,
    user: String,
content: Array
})
module.exports = mongoose.model('warns', Shema)