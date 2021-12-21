const fs = require('fs')
const db = require('./db.json')
const {MessageEmbed, MessageAttachment} = require('discord.js')
const { fetchTranscript } = require("reconlx");
module.exports = (client , reaction,user) => {
     
  const message = reaction.message
  const member = message.guild.members.cache.get(user.id)
  if(user.bot) return;
  if(
      ["✅" ,"🔒"].includes(reaction.emoji.name)
  ){
      switch(reaction.emoji.name){
          case "✅":
             if(reaction.message.channel.id !== '859004591554428948') return;
             reaction.users.remove(user);
             let username = user.username;
             let categoryID = "859493444375937045"
            console.log(username.includes("-"))
             if(db["ticket"][`『🎫』${username}`]) return;
             let channel = await message.guild.channels.create(`『🎫』${username}` , {type: 'text', parent: message.guild.channels.cache.get(categoryID)})
          /*  if(!db["ticket"][channel.id]){
              db["ticket"][channel.id]
            }
            if(!db["ticket"][username.id]){
              db["ticket"][username.id]
            }*/
             if(!db["ticket"][`『🎫』${username}}`]){
             
              db["ticket"][`『🎫』${username}`] = {
               
              }
             db['ticket_id'][channel.id] = { msg : 0,
            id : channel.id}
            }
            fs.writeFile("./db.json", JSON.stringify(db, null , 4), (err) => {
              if(err) console.log(err) })
             channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL' : false})
             channel.updateOverwrite(member , {
               'VIEW_CHANNEL' : true,
               'SEND_MESSAGES': true,
               'ADD_REACTIONS': true
             })
             channel.updateOverwrite(message.guild.roles.cache.get("829447411684343870"), {'VIEW_CHANNEL' : true})
             var embed = new MessageEmbed()
             .setTitle('Bonjour bienvenue dans votre ticket')
             .setDescription('Merci de dire votre problème , un staff vas intervenir pour vous aider !')
             .setTimestamp()
             channel.send(embed).then(m => {m.react('🔒')})
            
              break;
              case "🔒": 
              fetchTranscript(message,  db['ticket_id'][reaction.message.channel.id].msg).then((data) => {
                const file = new MessageAttachment(data, `${message.channel.name}.html`);
             // message.channel.send(file);
                client.channels.cache.get(datas.logChannel).send(file)
            });
              let usernames = user.username;
            delete  (db["ticket"][`『🎫』${usernames}`])
            delete db['ticket_id'][reaction.message.channel.id]
        /*    delete db["ticket"][reaction.message.channel.id]
            delete db["ticket"][username.id]*/
             message.channel.delete()
              break;

      }
  }
}