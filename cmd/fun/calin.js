const Discord = require('discord.js');

exports.run = (client, message, args, datas) => {
    const member = message.guild.members.cache.get(args[0])|| message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur pour effectuer cette action. ❌")
            .setColor("#F53436")
        message.channel.send(error_nomentions)            
    }else {
        var calin = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> viens de faire un calin à <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/8vk8.gif")
        message.channel.send(calin)
    }
}
module.exports.help = {
    name: "calin",
  
    category: "fun",
      emoji: "🔮",
    description: "Permet de faire un calin a qqn",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }