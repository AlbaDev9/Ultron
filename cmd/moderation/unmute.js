const Discord = require('discord.js')

module.exports.run =  async (client, message, args, datas) => {
    message.delete();



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

    const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'

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
        message.channel.send(new Discord.MessageEmbed().setTitle("Membre démute").setColor('GREEN').setDescription(`${member} à été démute`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Membre démute").setColor('GREEN').setDescription(`${member} à été démute`))
    }
    await member.roles.remove(muteRole)

}

module.exports.help = {
    name: "unmute",
    permissions : ["MANAGE_ROLES" , 'MANAGE_MESSAGES'],
    category: "moderation",
    description: "Démute un membre",
    usage : '',
    isUserAdmin: false,
    botPerms : true,
    args: false
    
  }