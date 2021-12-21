const Discord = require('discord.js');
const bot = new Discord.Client()
const bdd = require('../../db/schema/anti.js')
module.exports.run = async (bot, message, args) => {
  if(bdd[message.guild.id]["anti-spam"] = false){
    bdd[message.guild.id]["anti-spam"] == true
    message.channel.send("Anti-spam a été activé !")
  }else{
    if(bdd[message.guild.id]["anti-spam"] = true){
        bdd[message.guild.id]["anti-spam"] == false 
     message.channel.send("Anti-spam a été désactivé !")
    }else{
        bdd[message.guild.id]["anti-spam"] == false
    }
 }
}
module.exports.help = {
name: "anti-spam"
}