const {MessageEmbed, GuildMemberRoleManager, MessageAttachment, Message, Client} = require('discord.js');


const moment = require('moment');
const Discord = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER'],
    allowedMentions : {
      parse : ['everyone' ,'roles' ,'users'],
      repliedUser : false
  }
})


const Guild = require('../../db/schema/guild')
const Fonction = require('../../db/schema/fonction')
const Welcomes = require('../../db/schema/Welcome')
;
module.exports = async (guild , client, message) => {
    const fonctions = await Fonction.findOne({id : guild.id})
    if(!fonctions){
        const doc = new Fonction({id: guild.id})
doc.save()
    }
    const datas = await Guild.findOne({id: guild.id})
    if(!datas){
        const doc = new Guild({id: guild.id})
doc.save()
    }
    
    /*message.channel.send(`Salut tape -help pour avoir les commandes`)
    .then(
    message.channel.send(`Pour changer le prefix c'est -setprefix (votre prefix)`)
    )
    .then(
    message.channel.send(`Rejoint le serveur support : https://discord.gg/a5ErbKe5W9"`)
    )
    const Discord = require('discord.js')
    

      const addembed = new Discord.MessageEmbed()
          .setTitle(`**Sliwers** vient d'être ajouté sur le serveur : ${guild.name}`)
          .setThumbnail(guild.icon)
          .addField(`**👑 Propriétaire :**`, `${guild.owner}`)
          .addField(`**📇 Nom du serveur :**`, `${guild.name}`)
          .addField(`**Id du serveur:**`, `${guild.id}`)
          .addField(`**Nombre de membres:**`, `${guild.memberCount}`)
          .setColor("GREEN")
          .setTimestamp()
                                                          
          message.channel('889756882917535814').send(addembed)*/
}
