const Discord = require('discord.js');

exports.run = (client, message, args, datas) => {
    const member = message.guild.members.cache.get(args[0])|| message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.MessageEmbed()
            .setDescription("❌ Please mention a user to perform this action. ❌")
            .setColor("#F53436")
        message.channel.send(error_nomentions)            
    }else {
        var calin = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> just hugged <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/8vk8.gif")
        message.channel.send(calin)
    }
}
module.exports.help = {
    name: "calin",
  
    category: "fun",
      emoji: "🔮",
    description: "Lets hug someone",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }