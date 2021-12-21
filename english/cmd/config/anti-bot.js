const Discord = require('discord.js');
const bot = new Discord.Client()
const bdd = require('../../db/schema/anti.js')
module.exports.run = async (bot, message, args) => {
  if(bdd[message.guild.id]["anti-bot"] = false){
    bdd[message.guild.id]["anti-bot"] == true
    message.channel.send("Anti-bot has been activated !")
  }else{
    if(bdd[message.guild.id]["anti-bot"] = true){
        bdd[message.guild.id]["anti-bot"] == false
        message.channel.send("Anti-bot has been disabled !")
    }else{
        bdd[message.guild.id]["anti-bot"] == false
    }
  }
}
module.exports.help = {
name: "anti-bot"
}