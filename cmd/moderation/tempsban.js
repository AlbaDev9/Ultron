const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    const embed = new MessageEmbed().setTitle('Il manque des informations').setColor('RED')
const user = message.mentions.users.first()|| message.guild.members.cache.get(args[0])
const time = args[1]
let reasons = args.splice(2).join(" ")
if(!user){
    embed.setDescription("Il manque : `l'utilisateur/membre (@ ou ID)` puis `le temps (en seconde)` ou `la raison (non obligatoire)``")
    message.channel.send(embed)
}
if(!time || isNaN(time)){
    embed.setDescription("Il manque : `le temps (en seconde)` et/ou `la raison (non obligatoire)`")
    message.channel.send(embed)
}
if(!reasons){ 
    reasons = "Aucune raison"
    message.guild.members.ban(user.id , {reasons : reasons})
setTimeout(function(){
    message.guild.members.unban(user.id)
}, time*1000)}
   
}
module.exports.help = {
  name: "tempsban",

  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Ban un membre temporairement",
  usage : '<@user> <time> <reaons>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}