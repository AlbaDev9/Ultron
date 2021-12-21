
 const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports.run = async (client, message, args, datas) => {
  const member = message.mentions.members.first() || message.member
        message.delete();
        let user = message.author
        const us = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`**Information sur <@${member.id}>**`)
        .setThumbnail(user.avatarURL)
        .setTitle(`Information sur ${member.user.username}#${member.user.discriminator} :`)
        .addField('ID du compte:', `${member.id}`, true)
        .addField('Pseudo sur le serveur :', `${member.nickname ? member.nickname : 'Aucun'}`, true)
        .addField('A crée son compte le :', `${moment.utc(member.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('A rejoins le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Status:', `${member.presence.status}`, true)
        .addField('Roles :', member.roles.cache.map(roles => `${roles.name}`).join(', '))
        .addField(`En réponse a :`,`${message.author.username}#${message.author.discriminator}`)
    message.channel.send(us)
    }

module.exports.help = {
  name: "userinfo",
  aliases : ['us'],
  category: "moderation",
  description: "Permet de savoir des information sur un membre",
  usage : '',
  isUserAdmin: false,
  permissions : ["SEND_MESSAGES"],
  args: false,
  botPerms : true
  
}
