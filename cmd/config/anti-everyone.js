const Discord = require('discord.js');
const bot = new Discord.Client()
const bdd = require('../../db/schema/anti.js')
module.exports.run = async (bot, message, args) => {
  if(bdd[message.guild.id]["anti-everyone"] = false){
    bdd[message.guild.id]["anti-everyone"] == true
    message.channel.send("Anti-everyone a été activé !")
  }else{
    if(bdd[message.guild.id]["anti-everyone"] = true){
        bdd[message.guild.id]["anti-everyone"] == false
        message.channel.send("Anti-everyone a été désactivé !")
    }else{
        bdd[message.guild.id]["anti-everyone"] == false
    }
  }
}
module.exports.help = {
name: "anti-everyone"
}