const Discord = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
  
         const ErrorEmbed = new Discord.MessageEmbed()
         .setTitle(`Erreur - Say`)
         .setThumbnail('https://disboard.org/images/bot-command-image-thumbnail-error.png')
         .setDescription('Erreur : Le fichier `Say.js` a été supprimé \n AlbaIsHere A recrée le fichier mais il est pas fait')
         .setFooter('Désolé')
         .setColor('Red')
         message.channel.send(ErrorEmbed)
    
 }
 module.exports.help = {
   name: "say",
 
   permissions : ["SEND_MESSAGES"],
   category: "membre",
   description: "Envoi ton message sous embed",
   usage : '',
   isUserAdmin: false,
   botPerms : true,
   args: false
   
 }