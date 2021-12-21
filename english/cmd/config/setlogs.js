const { MessageEmbed } = require('discord.js');
const Guild = require('../../db/schema/guild')
const Fonction = require('../../db/schema/fonction')
module.exports.run =  async (client, message, args, settings ,fonctions) => {
    const setting = await Guild.findOne({id: message.guild.id})
    const res = await message.mentions.channels.first()
    const confi = new MessageEmbed()
    .setTitle('Want to configure Sliwers?')
    .setColor('RED')
    .setDescription('Please put a `channel`!')
    const oldLogs = setting.logChannel
    if(fonctions.logs === "off"){
      const doc = await Fonction.findOneAndUpdate({id: message.guild.id} , {$set : {logs: "on"}}, { new :true})
    await  doc.logs
    }
    if(!res) return message.channel.send(confi)
    if(res){
      const change = new MessageEmbed()
      .setTitle('Modified Logs')
      .setColor('GREEN')
      .setDescription(`Your living room for logs has been modified here is your new living room <#${res.id}> \nThe logging system is now on`)
        await message.channel.send(change)
       const doc = await Guild.findOneAndUpdate({id: message.guild.id} , {$set : {logChannel: res}}, { new :true})
       doc.logChannel
    }
    };
    module.exports.help = {
        name: "setlogs",
        aliases : ['logs'],
        permissions : ["MANAGE_GUILD"],
        category: "config",
        description: "Change the bot's log room",
        usage : '<valeur>',
        isUserAdmin: false,
        botPerms : false,
        args: true
        
      }