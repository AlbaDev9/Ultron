const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
    const member = message.mentions.members.first()

    if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Please mention the mute member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` You cannot mute the owner of the server.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')

    if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` The bot cannot mute this member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    const reason = args.slice(1).join(' ')

   member.send(new Discord.MessageEmbed()
   .setTitle('You have been mute')
   .setColor('BLUE')
   .setDescription(`The moderator ${message.author} you to mute ${reason !== null? `${reason}`: ""}`))

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
  description: "Mute a member",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}