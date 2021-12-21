const mongoose = require('mongoose');

const TicketDataSchema = new mongoose.Schema({
    GuildID: String,
    Channel: String,
    Content: String
});

const MessageModel = module.exports = mongoose.model('Left', TicketDataSchema);