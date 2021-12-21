const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	guild_id: String,
  msg_id: String,
	rcs: Array
});

module.exports = mongoose.model('reactions', Schema);