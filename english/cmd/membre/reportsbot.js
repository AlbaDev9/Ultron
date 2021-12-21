const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    const txt = args.splice(0).join(" ")
    const members = "504315887541551104"
 //   const members1 = "504315887541551104"
    if(!txt){
        message.reply('Please put a report message')
    }else{
        client.users.cache.get(members).send(new MessageEmbed().setTitle('Report received by: ' + message.author.username).setDescription(txt))

    //    await client.users.cache.get(members1).send(new MessageEmbed().setTitle('Report reçus par : ' + message.author.username).setDescription(txt))
    
    }
   
}
module.exports.help = {
  name: "reportsbot",
  aliases : ['reportbot', 'bugbot'],
  category: "membre",
  description: "Report a bot bug",
  usage : '<text>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}