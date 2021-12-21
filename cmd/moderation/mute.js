const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
    const member = message.mentions.members.first()

    if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Veuillez mentionner le membre à mute.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Vous ne pouvez mute le propriétaire du serveur.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')

    if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Le bot ne peut pas mute ce membre.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    const reason = args.slice(1).join(' ')

   member.send(new Discord.MessageEmbed()
   .setTitle('Vous avez été mute')
   .setColor('BLUE')
   .setDescription(`Le modérateur ${message.author} vous à mute ${reason !== null ?  `${reason}`: ""}`))

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Muted',
                permissions: 0
            }
        })
        message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
            SEND_MESSAGES: false,
            CONNECT: false,
            ADD_REACTIONS: false
        }))
    }
    await member.roles.add(muteRole)



   
}
module.exports.help = {
  name: "mute",
  permissions : ["MANAGE_ROLES" , "MANAGE_MESSAGES"],
  category: "moderation",
  description: "Mute un membre",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}