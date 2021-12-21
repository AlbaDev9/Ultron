const Discord = require("discord.js"); 

exports.run = async (client, message, args, datas) => {

  if (message.guild.member(message.mentions.users.first())) {
    var avatar = message.mentions.users.first()
} else {
    var avatar = message.author
}
var avatar_embed = new Discord.MessageEmbed()
    .setColor("18d67e")
    .setTitle("Voici la photo de profil de " + avatar.username)
    .setImage(avatar.avatarURL({dynamic: true, size: 1024 }))
    .setURL(avatar.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTimestamp()
    message.channel.send(avatar_embed)

};
module.exports.help = {
    name: "avatar",
    aliases : ['icon'],
    category: "fun",
      emoji: "🔮",
    description: "Affiche son avatar",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }