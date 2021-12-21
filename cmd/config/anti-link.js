const Fonctions = require('../../db/schema/fonction')
const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas , fonctions)  => {

if(fonctions.antilink === "on"){
   const offraid = new Discord.MessageEmbed()
   .setTitle('système anti-link désactivé')
   .setColor('RED')
   .setDescription('Le système d\'anti-link à été désactivé')
   message.channel.send(offraid).then(async (message) => {
       message.delete({timeout : 5000})
   })
   const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {antilink: "off"}}, { new :true})
   doc.antilink
}
if(fonctions.antilink === "off"){
   const onraid = new Discord.MessageEmbed()
   .setTitle('système anti-link activé')
   .setColor('GREEN')
   .setDescription('Le système d\'anti-link à été activé')
   message.channel.send(onraid).then(async (message) => {
       message.delete({timeout : 5000})
   })
   const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {antilink: "on"}}, { new :true})
   doc.antilink
}
   
}
module.exports.help = {
  name: "anti-link",
  aliases : ['anti-links'],
  permissions : ["MANAGE_GUILD"],
  category: "config",
  description: "Config l'anti link",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false,
  premium : true
  
}