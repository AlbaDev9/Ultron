const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('../../db/schema/warns')
const { MessageEmbed } = require('discord.js')
module.exports.run = (client , message, args, datas) => {
    message.delete();
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const nouser = new MessageEmbed()
    .setTitle('`❓`・Nous avons pas assez d\'information')
    .setColor('RED')
    .setDescription(`Merci de mettre un utilisateur faite par exemple : ${datas.prefix}unwarn ${message.author} insulte`)
    if(!user) return message.channel.send(nouser)
    const reason = args.slice(1).join(" ") || "Aucune Raison "

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
        .setDescription(`Vous avez été avertie par ${message.author} pour la raison : **${reason}**`)
        .setColor("BLUE")
    )
    if(datas.logChannel === undefined){
        message.channel.send(new Discord.MessageEmbed().setTitle("membre warn").setColor('GREEN').setDescription(`${user} averti(e) pour la raison ${reason}`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("membre warn").setColor('GREEN').setDescription(`${user} averti(e) pour la raison ${reason}`))
    }


}
module.exports.help = {
  name: "warn",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Warn un membre",
  usage : '',
  isUserAdmin: true,
  botPerms : false,
  args: false
  
}