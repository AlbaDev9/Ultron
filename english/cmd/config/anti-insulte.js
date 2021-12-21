const Fonctions = require('../../db/schema/fonction')
const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas , fonctions)  => {

if(fonctions.insulte === "on"){
   const offraid = new Discord.MessageEmbed()
   .setTitle('anti-insult system deactivated')
   .setColor('RED')
   .setDescription('The anti-insult system has been deactivated')
   message.channel.send(offraid).then(async (message) => {
       message.delete({timeout : 5000})
   })
   const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {insulte: "off"}}, { new :true})
   doc.insulte
}
if(fonctions.insulte === "off"){
   const onraid = new Discord.MessageEmbed()
   .setTitle('anti-insult system activated')
   .setColor('GREEN')
   .setDescription('The insult system has been activated')
   message.channel.send(onraid).then(async (message) => {
       message.delete({timeout : 5000})
   })
   const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {insulte: "on"}}, { new :true})
   doc.insulte
}
   
}
module.exports.help = {
  name: "anti-insulte",
  aliases : ['anti-insultes'],
  permissions : ["MANAGE_GUILD"],
  category: "config",
  description: "Config the anti insult",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false,
  premium : true
  
}