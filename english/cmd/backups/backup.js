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
  if(reponse === "load"){

   const two = m => m.author.id === message.author.id;
   const twoC = new MessageCollector(message.channel, two, { max: 1 });
   await message.channel.send('Please put an ID below!')
   twoC.on('collect' , message => {
     const backupID = message.content

     backup.fetch(backupID).then(() => {




        backup.load(backupID, message.guild).then(() => {
    
                      return message.channel.send('Backup successfully loaded!');
              
                  }).catch(() => {
              
                      
                           message.channel.send(': x: No backup found with ID: '+ backupID +'!');
                     
                  });
                  return;
    
              
   




      })

    })
     
  
   

     return;
   
  }
  if(reponse === "infos"){
    message.channel.send('Please put an ID below!')
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
            .addField('Name', backup.data.name)
            .addField('Size', backup.size + ' kb')
            .addField('Created the', formattedDate)
            .setFooter('Backup ID: '+backup.id);
  
        return message.channel.send(embed);
  
    }).catch(() => {
              
       message.channel.send(': x: No backup found with ID: '+ IDS +'!');
  
         
  });
    })
    return;

  }
  if(reponse === "list"){
    backup.list().then((backups) => {
      message.channel.send(new MessageEmbed().setTitle('Here is the list of your backups (sort by ID)!').setDescription(backups))
  });
  return
  }

  if(!reponse === "load" || "create" || "infos" || "list"){
    message.channel.send('Action Not Found') }

   })
}
module.exports.help = {
  name: "backup",
  
  permissions : [],
  category: "moderation",
  description: "Use the backup functions",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
    args: false,
    cooldown : false,
    premium : true
  
}