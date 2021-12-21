const Discord = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
  
         const ErrorEmbed = new Discord.MessageEmbed()
         .setTitle(`Error - Say`)
         .setThumbnail('https://disboard.org/images/bot-command-image-thumbnail-error.png')
         .setDescription('Error: The file `Say.js` was deleted \n AlbaIsHere A recreates the file but it is not done')
         .setFooter('Sorry')
         .setColor('Red')
         message.channel.send(ErrorEmbed)
    
 }
 module.exports.help = {
   name: "say",
 
   permissions : ["SEND_MESSAGES"],
   category: "membre",
   description: "Send your message under embed",
   usage : '',
   isUserAdmin: false,
   botPerms : true,
   args: false
   
 }