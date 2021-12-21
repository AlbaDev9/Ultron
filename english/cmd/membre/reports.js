const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    if(!datas.logChannel) return message.channel.send("Please put Un salon Logs!");
        const txt = args.splice(0).join(" ")
    if(datas.logChannel === null || undefined || ""){
        message.reply('There are no logs on the server so I can send the null report')
    }else{
        client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Report received by: ' + message.author.username).setDescription(txt))
    
    }
   
}
module.exports.help = {
  name: "reports",
  aliases : ['report', 'bug'],
  permissions : false,
  category: "membre",
  description: "Report a server bug",
  usage : '<text>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}