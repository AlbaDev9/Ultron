
 const { MessageEmbed } = require("discord.js");
 const moment = require('moment');
 
 module.exports.run = async (client, message, args, datas) => {
   const member = message.mentions.members.first() || message.member
         message.delete();
         let user = message.author
         const us = new MessageEmbed()
         .setColor('BLUE')
         .setTitle(`Bon anniversaire `)
         .setDescription("A Alicia !")
         .setFooter("La soeur de AlbaIsHere#0456")
         .setTimestamp()
     message.channel.send(us)
     }
 
 module.exports.help = {
   name: "bd",
   aliases : ['us'],
   category: "moderation",
   description: "Les anniversaires",
   usage : '',
   isUserAdmin: false,
   permissions : ["ADMINISTRATOR"],
   args: false,
   botPerms : true
   
 }