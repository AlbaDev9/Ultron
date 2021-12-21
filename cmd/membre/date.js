const { random } = require('colors')
const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = async (client , message, args, datas)  => {

    const author = message.author.username
    message.delete()
    moment.locale('fr')
    const DateEmbed = new Discord.MessageEmbed()
          .setColor('#00D807')
          .setTitle('Date et l\'heure')
          .setAuthor(author)
          .setDescription(author + ' a demandé la date et l\'heure')
          .addFields(
      { name: "Date : "  , value: `${moment(message.createdAt).format('DD/MM/YYYY')}`, inline: true },
      { name: 'Heure : ', value: `${moment(message.createdAt).format('HH:mm:ss')}`, inline: true }
  )

      message.channel.send(DateEmbed);
}
module.exports.help = {
  name: "date",
  aliases : '',
  permissions : false,
  category: "membre",
  description: "Dit la date et l'heure",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}