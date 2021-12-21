const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let user = message.guild.member(message.mentions.users.first());
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('Whoops ! You didn\'t specify any numbers between ** 1 ** and ** 100 **' );

    const messages = (await message.channel.messages.fetch({
        limit:  100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length =  Math.min(args[1], messages.length);

    if (messages.length === 0 || !user ) return message.reply('Whoops ! No message deleted from this user');

    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);
    message.delete()
    
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("GREEN")
    .setDescription(`** Action **: __UserClear __ \ n ** Number (s) of messages **: ${args[1]} \ n ** User ** ${args[0]} `)
    .setTimestamp()
    
    if(datas.logChannel === 'undefined'){
      return;
    }else{
      client.channels.cache.get(datas.logChannel).send(embed);
    }

   
}
module.exports.help = {
  name: "nuke",
  aliases : ['prune'],
  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Deletes a number of messages that come from a person",
  usage : '<@user> <nombre>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}