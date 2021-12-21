const Discord = require('discord.js')

module.exports.run =  async (client, message, args, datas) => {
    message.delete();



    const member = message.mentions.members.first()

    if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Please mention the mute member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` You cannot mutate the owner of the server.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('You cannot mute this member.')

    if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` The bot cannot mute this member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    const reason = args.slice(1).join(' ') || 'No reason given.'

    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

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
    if(datas.logChannel === undefined){
        message.channel.send(new Discord.MessageEmbed().setTitle("Demute member").setColor('GREEN').setDescription(`${member} à été démute`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Demute member").setColor('GREEN').setDescription(`${member} has been demute`))
    }
    await member.roles.remove(muteRole)

}

module.exports.help = {
    name: "unmute",
    permissions : ["MANAGE_ROLES" , 'MANAGE_MESSAGES'],
    category: "moderation",
    description: "Demute a member",
    usage : '',
    isUserAdmin: false,
    botPerms : true,
    args: false
    
  }