const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports.run = async (client , message, args, datas)  => {
const button = new disbut.MessageButton().setLabel('Ajoute moi !').setStyle('url').setEmoji('➕').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
const support = new disbut.MessageButton().setLabel('Mon serveur Discord').setStyle('url').setEmoji('❓').setURL('https://discord.gg/pQsPUZcKFF')
const all = new disbut.MessageActionRow().addComponents(button , support)
const embed = new Discord.MessageEmbed()
.setTitle('Tu veut m\'ajouter ?' )
.setDescription('Choisie une option avec les boutons')
   message.channel.send(embed , all)
}
module.exports.help = {
  name: "invite",
  aliases : ['addbot'],
  permissions : false,
  category: "membre",
  description: "Invite le bot",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}