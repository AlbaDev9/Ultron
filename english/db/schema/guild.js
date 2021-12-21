const mongoose = require("mongoose");
const guildShema = mongoose.Schema({
    id: String,
    prefix: {
        "type": String,
        "default": "-"
    },
    welcomeMessage: {
        "type": String,
        "default": "undefined"
    },
    welcomeChannel: {
        "type": String,
        "default": "undefined"
    },
    logChannel: {
        "type": String,
        "default": "undefined"
    },
    leftMessage: {
        "type": String,
        "default": "undefined"
    },
    leftChannel: {
        "type": String,
        "default": "undefined"
    },
    cooldown: {
        "type": String,
        "default": "3"
    },
    verif: {
        "type": String,
        "default": "off"
    },
    verifChannel: {
        "type": String,
        "default": "undefined"
    },
    verifEmoji: {
        "type": String,
        "default": "✅"
    },
    ticketChannel: {
        "type": String,
        "default": "undefined"
    },
    ticketMessage: {
        "type": String,
        "default": "Bonjour bienvenue au support merci de réagire pour ouvire un ticket"
    },
    ticketReact: {
        "type": String,
        "default": "✅"
    },
    ticketCategorieId : {
        "type": String,
        "default": "undefined"
    },

    autorole: {
        "type": String,
        "default": "undefined"
    },
    level: {
        "type": String,
        "default": "off"
    },
    money: {
        "type": String,
        "default": "off"
    },
    verif_message: {
        "type": String,
        "default": "Coche la reaction pour acceder au serveur"
    },
    verif_image: {
        "type": String,
        "default": "undefined"
    },
    wrn_count_to_ban: {
        "type": String,
        "default": "undefined"
    },
    spams: {
        "type": String,
        "default": "off"
    },
    suggest: {
        "type": String,
        "default": "off"
    },
    suggestchannel: {
        "type": String,
        "default": "undefined"
    },
    antipub: {
        "type": String,
        "default": "off"
    },
    antipubreturn: {
        "type": String,
        "default": "undefined"
    },
    spamreturn: {
        "type": String,
        "default": "undefined"
    },
    webhookid: String,
    webhooktoken: String
});

module.exports = mongoose.model("Guild", guildShema);