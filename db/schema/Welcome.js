const mongoose = require('mongoose');

const TicketDataSchema = new mongoose.Schema({
    GuildID: String,
    Channel: String,
    Content: String,
    RolesGive: String
});

const MessageModel = module.exports = mongoose.model('Welcome', TicketDataSchema);