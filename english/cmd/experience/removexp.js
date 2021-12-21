const Discord = require('discord.js')
const db = require('quick.db')
const xp =  new db.table("levels")

module.exports.run = async (client , message, args, datas)  => {
    if(fonctions.level !== "on") return message.reply('Please activate the level system with: '+ datas.prefix + "level")
    const user = message.mentions.users.first() || message.author
    if(user === message.mentions.users.first()){
      
      var nbr = args[1]
    }
    if(user === message.author){
   
      var nbr = args[0]
    }
    const nonumber = new Discord.MessageEmbed()
    .setTitle('You didn\'t put a number')
    .setColor('RED')
    .setDescription('Please put a number!')
    if(isNaN([nbr])) return message.channel.send(nonumber)
    let experience = xp.fetch(`levels_${message.guild.id}_${user.id}`)
    if(experience < nbr){
      message.reply('The number is too large for the budget')
      return;
    }
   let lvls = await xp.subtract(`levels_${message.guild.id}_${user.id}`, nbr)
   
   if(experience < 1) xp.set(`levels_${message.guild.id}_${user.id}`, 0)
   const vousmeme = new Discord.MessageEmbed()
  .setTitle('You have withdrawn from the experience')
  .setColor('GREEN')
  .setDescription(`You have retired ${nbr}s you now have ${lvls}xp`)
  
  const unepersonne = new Discord.MessageEmbed()
  .setTitle('You have withdrawn the experience from a person')
  .setColor('GREEN')
  .setDescription(`You have removed ${nbr}xp from ${user} now he has ${experience}s`)
  
  
  
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
  description: "Withdraw XP",
  usage : '<@user> <number> OU <number>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}