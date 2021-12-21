const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports.run = async (client , message, args, datas)  => {
const button = new disbut.MessageButton().setLabel('Add me !').setStyle('url').setEmoji('➕').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
const support = new disbut.MessageButton().setLabel('My Discord server').setStyle('url').setEmoji('❓').setURL('https://discord.gg/pQsPUZcKFF')
const all = new disbut.MessageActionRow().addComponents(button , support)
const embed = new Discord.MessageEmbed()
.setTitle('Do you want to add me?' )
.setDescription('Choose an option with the buttons')
   message.channel.send(embed , all)
}
module.exports.help = {
  name: "invite",
  aliases : ['addbot'],
  permissions : false,
  category: "membre",
  description: "Invite the bot",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}