const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: String,   
    name:{
        "type" : String
    },
    prix: {
        "type" : String
    },
    type: {
        "type" : String
    },
    give: {
        "type" : String
    },
    article : {
        "type" : Array
    },

});

module.exports = mongoose.model('shop', Schema);