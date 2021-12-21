const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {

      
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Whoops ! You didn\'t specify any numbers between ** 1 ** and ** 100 **' );

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100)
    });
    message.delete()
    await message.channel.bulkDelete(messages);
    if(datas.logChannel === undefined){
      message.channel.send(new Discord.MessageEmbed().setTitle("Message clear").setColor('GREEN').setDescription(`${args [0]} messages have been cleared in ${message.channel}`))
  }else{
      message.channel.send(new Discord.MessageEmbed().setTitle("Message clear").setColor('GREEN').setDescription(`${args [0]} messages have been cleared in ${message.channel}`))
  }/*cache.get(datas.logChannel).*/
   
}
module.exports.help = {
  name: "clear",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Delete a number of messages",
  usage : '<nombre> (max : 99)',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}