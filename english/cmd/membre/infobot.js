
const Discord = require('discord.js')
   module.exports.run = async (client , message, args, datas)  => {

    
const UseEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag)
.setColor("BLUE")
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setDescription(`**General** :
   **Name :** ${client.user.username}
   **Tag : ** ${client.user.tag}
   **ID : ** ${client.user.id}
   **Owner** : AlbaIsHere#0456            
   **2ème owner** : XXX-Perseur#9927
   \u200b
   **Stats** : 
   **Number of servers on which the bot is:** ${client.guilds.cache.size}
   **Total number of salons:** ${client.channels.cache.size}
   **Total number of members:** ${client.users.cache.size}
   **Prefix :** ${datas.prefix}`
)


    
   message.channel.send({ embed : UseEmbed}) 

   
}
module.exports.help = {
  name: "infobot",
  aliases : ['ib'],
  permissions : false,
  category: "membre",
  description: "Regarde les infos du bot",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}