const { random } = require('colors')
const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = async (client , message, args, datas)  => {

    const author = message.author.username
    message.delete()
    moment.locale('en')
    const DateEmbed = new Discord.MessageEmbed()
          .setColor('#00D807')
          .setTitle('Date and time')
          .setAuthor(author)
          .setDescription(author + ' asked for date and time')
          .addFields(
      { name: "Date : "  , value: `${moment(message.createdAt).format('DD/MM/YYYY')}`, inline: true },
      { name: 'Time : ', value: `${moment(message.createdAt).format('HH:mm:ss')}`, inline: true }
  )

      message.channel.send(DateEmbed);
}
module.exports.help = {
  name: "date",
  aliases : '',
  permissions : false,
  category: "membre",
  description: "Says the date and time",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}