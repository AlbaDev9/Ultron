const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas , fonctions)  => {
if(fonctions.suggest !== "on") return message.reply('Système non configurer merci de faire : ' + datas.prefix + "admin-suggest")
const idee = args.splice(0).join(' ')
const member = message.author
if(!datas.logChannel) return message.channel.send("Veuillez mettre Un salon Suggest !");
if(!idee){
  const embed = new Discord.MessageEmbed()
  .setTitle('ERREUR 404')
  .setColor('RED')
  .setDescription(`Merci de mettre votre idée en faisant : ${datas.prefix}suggest`)
 message.reply(embed)
} else {
  const embed = new Discord.MessageEmbed()
  .setTitle('💡 - SUGGESTION DEMANDER')
  .setColor('GREEN')
  .setAuthor(`De : ${member.username}`)
  .setDescription(`Idée demandé : ${idee}\nMerci de réagire pour qu'on sache votre avie`)
  .setFooter('Pour faire une suggestion merci de faire '+ datas.prefix + 'suggest <voter_idee>')
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
  description: "Envoie une suggestion",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}