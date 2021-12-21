const { MessageEmbed } = require("discord.js")
const Suggest = require('../../db/schema/fonction')
const Guild = require('../../db/schema/guild')
module.exports.run = async (client , message, args, fonctions)  => {
const channel = await message.mentions.channels.first()
    if(fonctions.suggest === "off"){
        if(!channel) return message.reply('merci de mettre un channel')
        const doc = await Suggest.findOneAndUpdate({id: message.guild.id} , {$set : {suggest: "on"}}, { new :true})
        doc.suggest
        const save = await Guild.findOneAndUpdate({id: message.guild.id} , {$set : {suggestchannel: channel.id}}, { new :true})
        save.suggestchannel
    message.channel.send(new MessageEmbed().setTitle('Fonction de suggestion mis à jours').setDescription(`Toute les suggestion seront disponible dans le salons <#${channel.id}>`))
    if(fonctions.suggest === "on"){
        const doc = await Suggest.findOneAndUpdate({id: message.guild.id} , {$set : {suggest: "off"}}, { new :true})
        doc.suggest
       message.reply('système supprimé ! Refaite la commande pour l\'activé')
    }
    
    }
   
}
module.exports.help = {
  name: "suggest-admin",

  permissions : ["MANAGE_GUILD"],
  category: "config",
  description: "Configure le système de suggestion",
  usage : '<#channel>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}