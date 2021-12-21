const Discord = require('discord.js')
const db = require('quick.db')
const xp =  new db.table("levels")

module.exports.run = async (client , message, args, datas)  => {
    if(fonctions.level !== "on") return message.reply('Merci d\'activer le système de niveaux avec : ' + datas.prefix + "level")
    const user = message.mentions.users.first() || message.author
    if(user === message.mentions.users.first()){
      
      var nbr = args[1]
    }
    if(user === message.author){
   
      var nbr = args[0]
    }
    const nonumber = new Discord.MessageEmbed()
    .setTitle('Vous n\'avez pas mis de nombre')
    .setColor('RED')
    .setDescription('Merci de mettre un nombre !')
    if(isNaN([nbr])) return message.channel.send(nonumber)
    let experience = xp.fetch(`levels_${message.guild.id}_${user.id}`)
    if(experience < nbr){
      message.reply('Le nombre et trop grand par rapport au budget')
      return;
    }
   let lvls = await xp.subtract(`levels_${message.guild.id}_${user.id}`, nbr)
   
   if(experience < 1) xp.set(`levels_${message.guild.id}_${user.id}`, 0)
   const vousmeme = new Discord.MessageEmbed()
  .setTitle('Vous vous êtes retiré de l\'experience')
  .setColor('GREEN')
  .setDescription(`Vous vous êtes retiré ${nbr}s vous avez maintenant ${lvls}xp`)
  
  const unepersonne = new Discord.MessageEmbed()
  .setTitle('Vous avez retiré de l\'experience à une personne')
  .setColor('GREEN')
  .setDescription(`Vous avez retiré ${nbr}xp à ${user} maintenant il a ${experience}s`)
  
  
  
   if(user.id === message.author.id){
      var util = vousmeme
  }else{
      var util = unepersonne
  }
   return message.channel.send(util)
  
     

   
}
module.exports.help = {
  name: "removexp",

  permissions : ["MANAGE_MESSAGES"],
  category: "experience",
  description: "Retire de l'XP",
  usage : '<@user> <number> OU <number>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}