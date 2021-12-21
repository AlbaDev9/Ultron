const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('../../db/schema/warns')
const { MessageEmbed } = require('discord.js')
module.exports.run = (client , message, args, datas) => {
    message.delete();
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const nouser = new MessageEmbed()
    .setTitle('`❓`・We don\'t have enough information')
    .setColor('RED')
    .setDescription(`Please put a user made for example: ${datas.prefix}unwarn ${message.author} insulte`)
    if(!user) return message.channel.send(nouser)
    const reason = args.slice(1).join(" ") || "No reason "

    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        moderator : message.author.id,
                        reason : reason
                    }
                ]
            })
        } else {
            const obj = {
                moderator: message.author.id,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save()
    });
    user.send(new MessageEmbed()
        .setDescription(`You have been notified by ${message.author} for the reason: ** ${reason} **`)
        .setColor("BLUE")
    )
    if(datas.logChannel === undefined){
        message.channel.send(new Discord.MessageEmbed().setTitle("warn member").setColor('GREEN').setDescription(`${user} warned for the reason ${reason}`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("warn member").setColor('GREEN').setDescription(`${user} warned for the reason ${reason}`))
    }


}
module.exports.help = {
  name: "warn",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Warn a member",
  usage : '',
  isUserAdmin: true,
  botPerms : false,
  args: false
  
}