const db = require('quick.db')
const levels = new db.table('levels')
const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas  , fonctions)  => {
    if(fonctions.level !== "on") return message.reply('Please activate the level system with: '+ datas.prefix + "level")
    const member = message.guild.members.cache.get(args[0])|| message.mentions.members.first() || message.member
    const exp = levels.fetch(`levels_${message.guild.id}_${member.id}`) || 0
    const lvl = levels.fetch(`lvl_${message.guild.id}_${member.id}`) || 1
    const embed = new Discord.MessageEmbed()
    .setTitle('Rank of:' + `${member.user.tag}`)
    .setDescription(`${member} at ${exp}xp`)
    .setTimestamp()
    message.channel.send(embed) 
   
}
module.exports.help = {
  name: "rank",
  aliases : ['levels'],
  permissions : [""],
  category: "experience",
  description: "Look at your rank",
  usage : '[<@user>]',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}