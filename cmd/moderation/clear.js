const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {

      
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Oups ! Tu n\' pas spécifié de nombres entre **1** et **100**' );

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100)
    });
    message.delete()
    await message.channel.bulkDelete(messages);
    if(datas.logChannel === undefined){
      message.channel.send(new Discord.MessageEmbed().setTitle("Message clear").setColor('GREEN').setDescription(`${args[0]} messages ont été clear dans ${message.channel}`))
  }else{
      message.channel.send(new Discord.MessageEmbed().setTitle("Message clear").setColor('GREEN').setDescription(`${args[0]} messages ont été clear dans ${message.channel}`))
  }/*cache.get(datas.logChannel).*/
   
}
module.exports.help = {
  name: "clear",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Supprime un nombre de message",
  usage : '<nombre> (max : 99)',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}