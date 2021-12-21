const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: String,
    Guild: String,
    level : {
        type :String,
        default : "off"
    },
    money : {
        type: String,
        default : "off"
    },
    antispam: {
        type : String,
        default: "off"
    },
    suggest: {
        type : String,
        default: "off"
    },
    logs: {
        type : String,
        default: "off"
    },
    welcomeMsg: {
        type : String,
        default: "off"
    },
    leftMsg: {
        type : String,
        default: "off"
    },
    ticket: {
        type : String,
        default: "off"
    },
    autorole : {
        type: String,
        default : "off"
    },
    antipub : {
        type: String,
        default : "off"
    },
    antibot : {
        type: String,
        default : "off"
    },
    antieveryone : {
        type: String,
        default : "off"
    },
    antilink : {
        type: String,
        default : "off"
    },
    antiselfbot : {
        type: String,
        default : "off"
    },
    withelist : {
        type : Boolean
    },
    insulte : {
        type: String,
        default: 'off'
    },
    ping : {
        type: String,
        default: 'off'
    },
})

module.exports = mongoose.model('Fonction', Schema)