const {MessageEmbed , MessageCollector} = require('discord.js')
const backup = require('discord-backup')
const {confirm} = require("djs-reaction-collector")
module.exports.run = async (client , message, args, datas)  => {
  
  if(message.author.id !== message.guild.ownerID) return message.channel.send(new MessageEmbed().setTitle("Commande réserver à l'Owner du serveur").setDescription(`Cette commande est réserver à <@${message.guild.ownerID}> !\nPouir faire cette commande merci de la faire dans un serveur ou vous êtes l'owner` )).then(async message => {message.delete({timeout : 5000})})
         const embed = new MessageEmbed().setTitle('What do you want to do ?').setDescription("`create`,` load`, `list` and` infos` please answer if below?")
         const author = message.author.id
 message.channel.send(embed)
 const firstFilter = m => m.author.id === message.author.id;
 const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 1 });
firstCollector.on("collect",async  message => {
  let reponse = message.content
  if(reponse === "create"){
    
      await backup.create(message.guild, {
        maxMessagesPerChannel : 0 
      }).then((backupData) => {

        return message.channel.send('Backup creates! ID: `` '+ backupData.id +' ! Do `` '+ datas.prefix +' backup then load take this ID '+ backupData.id);

    })
    return;
  }
  

  if(!reponse === "create"){
    message.channel.send('Action Not Found Or please get the premium') }

   })
}
module.exports.help = {
  name: "backup-false",
  
  permissions : [],
  category: "moderation",
  description: "Utiliser les fonctions de backup",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
    args: false,
    cooldown : false
  
}