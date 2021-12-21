const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
    const member = message.mentions.members.first()
    const time = args[1]
    if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` Please mention the mute member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });
    if(!time || isNaN(time))  return message.channel.send(new Discord.MessageEmbed()
    .setDescription('\`⛔\` Please enter a time in seconds.')
    .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });
    if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` You cannot mutate the owner of the server.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas mute ce membre.')

    if (!member.manageable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('\`⛔\` The bot cannot mute this member.')
        .setColor('RED')).then(msg => { setTimeout(() => msg.delete(), 7500) });

   

   member.send(new Discord.MessageEmbed()
   .setTitle('You have been mute')
   .setColor('BLUE')
   .setDescription(`The moderator ${message.author} mute you`))

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
        message.channel.send(new Discord.MessageEmbed().setTitle("Mute member").setColor('GREEN').setDescription(`${member} has been muted by ${message.author} for $ {time} s`))
    }else{
        client.channels.cache.get(datas.logChannel).send(new Discord.MessageEmbed().setTitle("Mute member").setColor('GREEN').setDescription(`${member} has been muted by ${message.author} for ${time}s`))
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
  description: "Mute a member temporarily",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}