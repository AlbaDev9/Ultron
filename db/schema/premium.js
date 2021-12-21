const mongo = require('mongoose')

const Schema = new mongo.Schema({
    GuildID : String,

})

const Models = module.exports = mongo.model('premium'  , Schema)