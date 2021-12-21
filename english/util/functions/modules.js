const modules = () => {
    const {Client, Collection, MessageAttachment, MessageEmbed, DiscordAPIError, Presence, TextChannel} = require('discord.js')
const client = new Client({ partials: ['MESSAGE', 'REACTION', 'CHANNEL']});
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
const {loadCommands} = require('./loadCommands')
const {level} = require('./levelmoney')
const db = require('../../db.json')
const fs = require('fs')
const DisTube = require('distube')
const Canvas = require('canvas')
const moment = require('moment')
const tiktok = require('tiktok-app-api')
const voiceCollection = new Collection()
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
const usersEveryoneMap = new Map()
const usersSpamMap = new Map()
}
module.exports = {
    modules
}