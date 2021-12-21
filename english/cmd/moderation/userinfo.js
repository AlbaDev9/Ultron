
 const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args, datas) => {
  const member = message.mentions.members.first() || message.member
        message.delete();
        let user = message.author
        const us = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`**Information on <@${member.id}>**`)
        .setThumbnail(user.avatarURL)
        .setTitle(`Information on ${member.user.username}#${member.user.discriminator} :`)
        .addField('Account ID:', `${member.id}`, true)
        .addField('Username on the server :', `${member.nickname ? member.nickname : 'Aucun'}`, true)
        .addField('Created his account on :', `${moment.utc(member.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Joined the server', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Status:', `${member.presence.status}`, true)
        .addField('Roles :', member.roles.cache.map(roles => `${roles.name}`).join(', '))
        .addField(`In response to:`,`${message.author.username}#${message.author.discriminator}`)
    message.channel.send(us)
    }

module.exports.help = {
  name: "userinfo",
  aliases : ['us'],
  category: "moderation",
  description: "Allows you to know information about a member",
  usage : '',
  isUserAdmin: false,
  permissions : ["SEND_MESSAGES"],
  args: false,
  botPerms : true
  
}
