const { MessageEmbed } = require("discord.js")
const Suggest = require('../../db/schema/fonction')
const Guild = require('../../db/schema/guild')
module.exports.run = async (client , message, args, fonctions)  => {
const channel = await message.mentions.channels.first()
    if(fonctions.suggest === "off"){
        if(!channel) return message.reply('please put a channel')
        const doc = await Suggest.findOneAndUpdate({id: message.guild.id} , {$set : {suggest: "on"}}, { new :true})
        doc.suggest
        const save = await Guild.findOneAndUpdate({id: message.guild.id} , {$set : {suggestchannel: channel.id}}, { new :true})
        save.suggestchannel
    message.channel.send(new MessageEmbed().setTitle('Updated suggestion function').setDescription(`All suggestions will be available in the lounges <#${channel.id}>`))
    if(fonctions.suggest === "on"){
        const doc = await Suggest.findOneAndUpdate({id: message.guild.id} , {$set : {suggest: "off"}}, { new :true})
        doc.suggest
       message.reply('system deleted! Re-order for the activated')
    }
    
    }
   
}
module.exports.help = {
  name: "suggest-admin",

  permissions : ["MANAGE_GUILD"],
  category: "config",
  description: "Configure the suggestion system",
  usage : '<#channel>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}