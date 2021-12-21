const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    username: String,
    inventoty: {
        "type": Object,
        "default": 0
    },

    daily: {
        "type": Date,
        "default": 0
}

   
});

module.exports = mongoose.model("User", userShema);