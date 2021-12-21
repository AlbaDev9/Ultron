const Discord = require('discord.js')
const db = require('quick.db')
const bdd = require('../../db/schema/premium.json')
const raid = require('../../db/schema/raid')
module.exports.run = async (client , message, args, datas  , fonctions)  => {

    const infos = await raid.findOne({id: message.guild.id})
    
    if(!infos){
         const doc = new raid({id: message.guild.id})
        await doc.save()
    }
    if(infos.activate === "on"){
        const offraid = new Discord.MessageEmbed()
        .setTitle('Anti-join mode disabled')
        .setColor('RED')
        .setDescription('Anti-join mode has been disabled')
        message.channel.send(offraid).then(async (message) => {
            message.delete({timeout : 5000})
        })
        const doc = await raid.findOneAndUpdate({id: message.guild.id} , {$set : {activate: "off"}}, { new :true})
        doc.activate
    }
    if(infos.activate === "off"){
        const onraid = new Discord.MessageEmbed()
        .setTitle('Anti-join mode activated')
        .setColor('GREEN')
        .setDescription('Anti-join mode has been activated')
        message.channel.send(onraid).then(async (message) => {
            message.delete({timeout : 5000})
        })
        const doc = await raid.findOneAndUpdate({id: message.guild.id} , {$set : {activate: "on"}}, { new :true})
        doc.activate
    }
    };

    module.exports.help = {
        name: "anti-join",
        permissions : ["MANAGE_GUILD"],
        category: "config",
        description: "Enables / disables ANTI-JOIN mode",
        usage : '',
        isUserAdmin: false,
        botPerms : false,
        args: false,
        premium : true
        
      } 