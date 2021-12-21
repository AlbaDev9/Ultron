const Discord = require('discord.js')
const db = require('quick.db')
const levels = new db.table('levels')


module.exports.run = async (client , message, args, datas, fonctions)  => {
  
    if(fonctions.level !== "on") return message.reply('Merci d\'activer le système de niveaux avec : ' + datas.prefix + "level")
    const member = message.mentions.users.first() || message.author
    if(member === message.mentions.users.first()){
      
      var nbr = args[1]
    }
    if(member === message.author){
   
      var nbr = args[0]
    }
    const nonumber = new Discord.MessageEmbed()
    .setTitle('Vous n\'avez pas mis de nombre')
    .setColor('RED')
    .setDescription('Merci de mettre un nombre !')
    if(isNaN([nbr])) return message.channel.send(nonumber)
    levels.add(`levels_${message.guild.id}_${member.id}` , nbr)
   let experience = levels.fetch(`levels_${message.guild.id}_${member.id}`)
   const vousmeme = new Discord.MessageEmbed()
  .setTitle('Vous vous êtes donner de l\'experience')
  .setColor('GREEN')
  .setDescription(`Vous vous êtes ajoutez ${nbr}s vous avez maintenant ${experience}xp`)
  
  const unepersonne = new Discord.MessageEmbed()
  .setTitle('Vous avez donner de l\'experience à une personne')
  .setColor('GREEN')
  .setDescription(`Vous avez ajoutez ${nbr}xp à ${member} maintenant il a ${experience}s`)
  
  
  
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
  description: "Ajoute de l'XP",
  usage : '<@user> <number> OU <number>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}