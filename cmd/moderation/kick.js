const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
   
    const members = message.mentions.members.first()

    
if(!members) return message.reply('Merci de mettre un membre...')  


message.guild.member(members).kick()
if(members.user.id == client.user.id) return message.channel.send("Je ne peux pas me kick moi même") 
if(datas.logChannel === undefined){
  message.channel.send(new Discord.MessageEmbed().setTitle("Membre kick").setColor('GREEN').setDescription(`${members} à été kick par ${message.author}`))
}else{
  client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Membre kick").setColor('GREEN').setDescription(`${members} à été kick par ${message.author}`))
}
    
 }
 module.exports.help = {
   name: "kick",
 
   permissions : ["KICK_MEMBERS"],
   category: "moderation",
   description: "Kick un membre",
   usage : '<@membre> [<reasons>]',
   isUserAdmin: false,
   botPerms : true,
   args: false
   
 }