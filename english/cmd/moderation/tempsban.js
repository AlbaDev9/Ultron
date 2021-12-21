const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    const embed = new MessageEmbed().setTitle('There is some information missing').setColor('RED')
const user = message.mentions.users.first()|| message.guild.members.cache.get(args[0])
const time = args[1]
let reasons = args.splice(2).join(" ")
if(!user){
    embed.setDescription("It is missing: `user / member (@ or ID)` then `time (in seconds)` or `reason (not mandatory)` `")
    message.channel.send(embed)
}
if(!time || isNaN(time)){
    embed.setDescription("It is missing: `the time (in seconds)` and / or `the reason (not compulsory)`")
    message.channel.send(embed)
}
if(!reasons){ 
    reasons = "No reason"
    message.guild.members.ban(user.id , {reasons : reasons})
setTimeout(function(){
    message.guild.members.unban(user.id)
}, time*1000)}
   
}
module.exports.help = {
  name: "tempsban",

  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Ban a member temporarily",
  usage : '<@user> <time> <reaons>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}