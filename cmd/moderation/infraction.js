const db = require('../../db/schema/warns')
const { MessageEmbed } = require('discord.js')
module.exports.run = (client , message, args, datas) => {
    
    message.delete();
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const nouser = new MessageEmbed()
    .setTitle('`❓`・Nous avons pas assez d\'information')
  .setColor('RED')
  .setDescription(`Merci de mettre un utilisateur faite par exemple : ${datas.prefix}infraction ${message.author}`)
        if(!user) return message.channel.send(nouser)
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`warn de : ${user.user.tag}`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Par :  : ${message.guild.members.cache.get(w.moderator).user.tag}\n Raison : **${w.reason}**`
                        ) ||`${user} à aucun avertissement ! `
                    )
                    .setColor("BLUE")
                )
            } else {
                const sage = new MessageEmbed()
                .setTitle('`😇`・Aucun avertissement')
              .setColor('GREEN')
              .setDescription(`${user} à aucun avertissement ! `)
                message.channel.send(sage)
            }

        })
}
module.exports.help = {
  name: "infraction",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Warn un membre",
  usage : '',
  isUserAdmin: true,
  botPerms : false,
  args: false
  
}