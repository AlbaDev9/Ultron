const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    let user = message.guild.member(message.mentions.users.first());
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('Oups ! Tu n\' pas spécifié de nombres entre **1** et **100**' );

    const messages = (await message.channel.messages.fetch({
        limit:  100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length =  Math.min(args[1], messages.length);

    if (messages.length === 0 || !user ) return message.reply('Oups ! Aucun mesage a supprmié de cette utilisateur');

    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);
    message.delete()
    
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("GREEN")
    .setDescription(`**Action**:  __UserClear__\n**Nombre(s) de messages** : ${args[1]}\n **Utilisateur**  ${args[0]} `)
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
  description: "Supprime u nombre de message qui provient d'une personne",
  usage : '<@user> <nombre>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}