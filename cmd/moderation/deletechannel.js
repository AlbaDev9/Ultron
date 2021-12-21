const Discord = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
    
    const channelmention = message.mentions.channels.first()

    if(!channelmention){
        message.channel.delete()
        if(datas.logChannel){
            const LogEmbed = new Discord.MessageEmbed()
           /* .setTitle('Salon Supprimé')
            .setColor('RED')
            .setDescription(`Le channel "${message.channel.name}" a été supprimé par ${message.author}`)
            client.message.cache.get(datas.logChannel).send(LogEmbed)*/
        }
    }
    if(channelmention){
        const fetchedChannel = channelmention
        fetchedChannel.delete()
    }
    
    
    
 }
 module.exports.help = {
   name: "deletechannel",
   aliases : ['channeldelete'],
   category: "moderation",
   description: "Delete un channel",
   usage : '',
   isUserAdmin: false,
   permissions : ["MANAGE_CHANNELS"],
   botPerms : true,
   args: false
   
 }