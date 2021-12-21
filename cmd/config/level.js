const Discord = require('discord.js')
const levelsFonction = require('../../db/schema/fonction')
module.exports.run = async (client , message, args, datas)  => {
    const infos = await levelsFonction.findOne({id: message.guild.id})
    if(!infos){
         const doc = new levelsFonction({id: message.guild.id})
        await doc.save()
    }
    if(infos.level === "on"){
        const offraid = new Discord.MessageEmbed()
        .setTitle('système de niveau désactivé')
        .setColor('RED')
        .setDescription('Le système de niveau à été désactivé')
        message.channel.send(offraid).then(async (message) => {
            message.delete({timeout : 5000})
        })
        const doc = await levelsFonction.findOneAndUpdate({id: message.guild.id} , {$set : {level: "off"}}, { new :true})
        doc.level
    }
    if(infos.level === "off"){
        const onraid = new Discord.MessageEmbed()
        .setTitle('système de niveau activé')
        .setColor('GREEN')
        .setDescription('Le système de niveau à été activé')
        message.channel.send(onraid).then(async (message) => {
            message.delete({timeout : 5000})
        })
        const doc = await levelsFonction.findOneAndUpdate({id: message.guild.id} , {$set : {level: "on"}}, { new :true})
        doc.level
    }

   
}
module.exports.help = {
  name: "level",
  aliases : ['lvl'],
  permissions : ["MANAGE_GUILD"],
  category: "config",
  description: "Active/desactive la fonction de niveaux",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}