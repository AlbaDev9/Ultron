const mongoose = require('mongoose');

const TicketDataSchema = new mongoose.Schema({
    MessageID: String,
    GuildID: String,
    ImageEmbed: String,
    Emote: String,
    ChannelID : String,
    RoleGived: String
});

const MessageModel = module.exports = mongoose.model('TicketData', TicketDataSchema);