const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
    const member = message.mentions.members.first()
    const time = args[1]
    if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Veuillez mentionner le membre à mute.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });
    if(!time || isNaN(time))  return message.channel.send(new Discord.MessageEmbed()
    .setDescription('\`⛔\` Veuillez indiquer un temps en seconde.')
    .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });
    if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Vous ne pouvez mute le propriétaire du serveur.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')

    if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Le bot ne peut pas mute ce membre.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

   

   member.send(new Discord.MessageEmbed()
   .setTitle('Vous avez été mute')
   .setColor('BLUE')
   .setDescription(`Le modérateur ${message.author} vous à mute `))

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
        message.channel.send(new Discord.MessageEmbed().setTitle("Membre Mute").setColor('GREEN').setDescription(`${member} à été mute par ${message.author} pendant ${time}s`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Membre Mute").setColor('GREEN').setDescription(`${member} à été mute par ${message.author} pendant ${time}s`))
    }
    
    await member.roles.add(muteRole)
    setTimeout(function(){
         member.roles.remove(muteRole)
    } , time*1000)


   
}
module.exports.help = {
  name: "tempsmute",
  permissions : ["MANAGE_ROLES" , "MANAGE_MESSAGES"],
  category: "moderation",
  description: "Mute un membre temporairement",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}