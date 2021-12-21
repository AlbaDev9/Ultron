const db = require('../../db/schema/warns')
const { MessageEmbed } = require('discord.js')
module.exports.run = (client , message, args, datas) => {
    
    message.delete();
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const nouser = new MessageEmbed()
    .setTitle('`❓`・We don\'t have enough information')
  .setColor('RED')
  .setDescription(`Please put a user made for example: ${datas.prefix}infraction ${message.author}`)
        if(!user) return message.channel.send(nouser)
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`warn from : ${user.user.tag}`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | By :  : ${message.guild.members.cache.get(w.moderator).user.tag}\n Raison : **${w.reason}**`
                        ) ||`${user} to no warning ! `
                    )
                    .setColor("BLUE")
                )
            } else {
                const sage = new MessageEmbed()
                .setTitle('`😇`・No warning')
              .setColor('GREEN')
              .setDescription(`${user} to no warning ! `)
                message.channel.send(sage)
            }

        })
}
module.exports.help = {
  name: "infraction",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Warn a member",
  usage : '',
  isUserAdmin: true,
  botPerms : false,
  args: false
  
}