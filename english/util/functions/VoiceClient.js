const { VoiceClient } = require('djs-voice')
const client = require('../../aponox')
const config = require('../../config.json')

const voice = new VoiceClient({
    allowBots : false ,
    client: client,
    debug: true ,
    mongooseConnectionString : config.mongodbconnect
})
module.exports = voice