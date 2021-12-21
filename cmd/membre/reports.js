const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    if(!datas.logChannel) return message.channel.send("Veuillez mettre Un salon Logs !");
        const txt = args.splice(0).join(" ")
    if(datas.logChannel === null || undefined || ""){
        message.reply('Il n\'y a pas de logs sur le serveur donc je peut envoyer le report nul pars')
    }else{
        client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Report reçus par : ' + message.author.username).setDescription(txt))
    
    }
   
}
module.exports.help = {
  name: "reports",
  aliases : ['report', 'bug'],
  permissions : false,
  category: "membre",
  description: "Reporte un bug du serveur",
  usage : '<text>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}