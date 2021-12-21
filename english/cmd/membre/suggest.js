const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas , fonctions)  => {
if(fonctions.suggest !== "on") return message.reply('System not configured please do : ' + datas.prefix + "admin-suggest")
const idee = args.splice(0).join(' ')
const member = message.author
if(!datas.logChannel) return message.channel.send("Please put A Suggest salon!");
if(!idee){
  const embed = new Discord.MessageEmbed()
  .setTitle('ERROR 404')
  .setColor('RED')
  .setDescription(`Please put your idea by doing: ${datas.prefix}suggest`)
 message.reply(embed)
} else {
  const embed = new Discord.MessageEmbed()
  .setTitle('💡 - SUGGESTION ASK')
  .setColor('GREEN')
  .setAuthor(`From: : ${member.username}`)
  .setDescription(`Idea requested: ${idee}\nPlease react so that we know your avie`)
  .setFooter('To make a suggestion, please do '+ datas.prefix +' suggest <vote_idee>')
 client.channels.cache.get(datas.suggestchannel).send(embed).then((m) => {
   m.react('✅')
   m.react('❎')
 })}
   
}
module.exports.help = {
  name: "suggest",
  aliases : ['suggestion'],
  permissions : false,
  category: "membre",
  description: "Send a suggestion",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}