const {MessageEmbed , MessageCollector} = require('discord.js')
const Fonctions = require('../../db/schema/lang')
const {confirm} = require("djs-reaction-collector")
module.exports.run = async (client , message, args, datas)  => {
  
  if(message.author.id !== message.guild.ownerID) return message.channel.send(new MessageEmbed().setTitle("Commande réserver à l'Owner du serveur").setDescription(`Cette commande est réserver à <@${message.guild.ownerID}> !\nPouir faire cette commande merci de la faire dans un serveur ou vous êtes l'owner` )).then(async message => {message.delete({timeout : 5000})})
         const embed = new MessageEmbed().setTitle('Que voulez vous faire ?').setDescription("`FR`, `EN` merci de répondre si dessous ?")
         const author = message.author.id
 message.channel.send(embed)
 const firstFilter = m => m.author.id === message.author.id;
 const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 1 });
firstCollector.on("collect",async  message => {
  const reponse = message.content
  if(reponse === "FR"){
    
    const fr = new Discord.MessageEmbed()
    .setTitle('Langue fr activé')
    .setColor('RED')
    .setDescription('La langue fr a été mis !')
    message.channel.send(fr).then(async (message) => {
        message.delete({timeout : 5000})
    })
    const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {lang: "fr"}}, { new :true})
    doc.insulte

    }

  if(reponse === "EN"){
    const en = new Discord.MessageEmbed()
    .setTitle('Language enabled')
    .setColor('RED')
    .setDescription('The language has been put!')
    message.channel.send(en).then(async (message) => {
        message.delete({timeout : 5000})
    })
    const doc = await Fonctions.findOneAndUpdate({id: message.guild.id} , {$set : {lang: "en"}}, { new :true})
    doc.insulte
  }
  

  if(!reponse === "FR" || "EN"){
      if(Fonctions.lang == "fr"){
    message.channel.send('Langue non trouvée ou veuillez attendre que votre langue soit disponible')
      }
      if(Fonctions.lang == "en"){
          message.channel.send("Language not found or please wait until your language is available")
      }
    }
   })
}
module.exports.help = {
  name: "setlang",
  
  permissions : [],
  category: "moderation",
  description: "Config la langue du bot",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
    args: false,
    cooldown : false,
    premium : false
  
}