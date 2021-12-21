const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    const txt = args.splice(0).join(" ")
    const members = "735190588638363688"
 //   const members1 = "504315887541551104"
    if(!txt){
        message.reply('Merci de mettre un message de report')
    }else{
        client.users.cache.get(members).send(new MessageEmbed().setTitle('Report reçus par : ' + message.author.username).setDescription(txt))

    //    await client.users.cache.get(members1).send(new MessageEmbed().setTitle('Report reçus par : ' + message.author.username).setDescription(txt))
    
    }
   
}
module.exports.help = {
  name: "reportsbot",
  aliases : ['reportbot', 'bugbot'],
  category: "membre",
  description: "Reporte un bug du bot",
  usage : '<text>',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}