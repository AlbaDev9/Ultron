const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
   
    const members = message.mentions.members.first()

    
if(!members) return message.reply('Please add a member ...')  


message.guild.member(members).kick()
if(members.user.id == client.user.id) return message.channel.send("I can't kick myself") 
if(datas.logChannel === undefined){
  message.channel.send(new Discord.MessageEmbed().setTitle("Kick member").setColor('GREEN').setDescription(`${members} was kicked by ${message.author}`))
}else{
  client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Kick member").setColor('GREEN').setDescription(`${members} was kicked by ${message.author}`))
}
    
 }
 module.exports.help = {
   name: "kick",
 
   permissions : ["KICK_MEMBERS"],
   category: "moderation",
   description: "Kick a member",
   usage : '<@membre> [<reasons>]',
   isUserAdmin: false,
   botPerms : true,
   args: false
   
 }