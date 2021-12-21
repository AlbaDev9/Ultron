const {MessageEmbed , MessageCollector} = require('discord.js')
const backup = require('discord-backup')
const {confirm} = require("djs-reaction-collector")
module.exports.run = async (client , message, args, datas)  => {
  
  if(message.author.id !== message.guild.ownerID) return message.channel.send(new MessageEmbed().setTitle("Commande réserver à l'Owner du serveur").setDescription(`Cette commande est réserver à <@${message.guild.ownerID}> !\nPouir faire cette commande merci de la faire dans un serveur ou vous êtes l'owner` )).then(async message => {message.delete({timeout : 5000})})
         const embed = new MessageEmbed().setTitle('Que voulez vous faire ?').setDescription("`create`, `load`  , `list` et `infos` merci de répondre si dessous ?")
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

        return message.channel.send('Backup crée!  ID: `'+backupData.id+'`! Faites `'+datas.prefix+'backup puis load prenez cette ID'+backupData.id+'`');

    })
    return;
  }
  if(reponse === "load"){

   const two = m => m.author.id === message.author.id;
   const twoC = new MessageCollector(message.channel, two, { max: 1 });
   await message.channel.send('Merci de mettre un ID si dessous !')
   twoC.on('collect' , message => {
     const backupID = message.content

     backup.fetch(backupID).then(() => {




        backup.load(backupID, message.guild).then(() => {
    
                      return message.channel.send('Backup chargée avec succès !');
              
                  }).catch(() => {
              
                      
                           message.channel.send(':x: Aucune backup trouvé avec l\'ID : '+ backupID +'!');
                     
                  });
                  return;
    
              
   




      })

    })
     
  
   

     return;
   
  }
  if(reponse === "infos"){
    message.channel.send('Merci de mettre un ID si dessous !')
    const three = m => m.author.id === message.author.id;
    const threeC = new MessageCollector(message.channel, three, { max: 1 });
    threeC.on('collect' , message => { 
      let IDS = message.content
      backup.fetch(IDS).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
  
        const embed = new MessageEmbed()
            .setAuthor('ℹ️ Backup', backup.data.iconURL)
            .addField('Nom', backup.data.name)
            .addField('Taille', backup.size + ' kb')
            .addField('Crée le', formattedDate)
            .setFooter('Backup ID: '+backup.id);
  
        return message.channel.send(embed);
  
    }).catch(() => {
              
       message.channel.send(':x: Aucune backup trouvé avec l\'ID : '+ IDS +'!');
  
         
  });
    })
    return;

  }
  if(reponse === "list"){
    backup.list().then((backups) => {
      message.channel.send(new MessageEmbed().setTitle('Voici la list de vos backup (classer par ID) !').setDescription(backups))
  });
  return
  }

  if(!reponse === "load" || "create" || "infos" || "list"){
    message.channel.send('Action Non Trouvée') }

   })
}
module.exports.help = {
  name: "backup",
  
  permissions : [],
  category: "moderation",
  description: "Utiliser les fonctions de backup",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
    args: false,
    cooldown : false,
    premium : true
  
}