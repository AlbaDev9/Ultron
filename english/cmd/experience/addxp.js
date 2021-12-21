const Discord = require('discord.js')
const db = require('quick.db')
const levels = new db.table('levels')


module.exports.run = async (client , message, args, datas, fonctions)  => {
  
    if(fonctions.level !== "on") return message.reply('Please activate the level system with: '+ datas.prefix + "level")
    const member = message.mentions.users.first() || message.author
    if(member === message.mentions.users.first()){
      
      var nbr = args[1]
    }
    if(member === message.author){
   
      var nbr = args[0]
    }
    const nonumber = new Discord.MessageEmbed()
    .setTitle('You didn\'t put a number')
    .setColor('RED')
    .setDescription('Please put a number!')
    if(isNaN([nbr])) return message.channel.send(nonumber)
    levels.add(`levels_${message.guild.id}_${member.id}` , nbr)
   let experience = levels.fetch(`levels_${message.guild.id}_${member.id}`)
   const vousmeme = new Discord.MessageEmbed()
  .setTitle('You gave yourself experience')
  .setColor('GREEN')
  .setDescription(`You have added ${nbr}s you now have ${experience} xp`)
  
  const unepersonne = new Discord.MessageEmbed()
  .setTitle('You have given experience to a person')
  .setColor('GREEN')
  .setDescription(`You have added ${nbr} xp to ${member} now he has ${experience}s`)
  
  
  
   if(member.id === message.author.id){
      var util = vousmeme
  }else{
      var util = unepersonne
  }
   return message.channel.send(util)
  
     
    
   
}
module.exports.help = {
  name: "addxp",

  permissions : ["MANAGE_MESSAGES"],
  category: "experience",
  description: "Add XP",
  usage : '<@user> <number> OU <number>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}