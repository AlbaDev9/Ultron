const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
   
    const member = message.mentions.members.first()
    const roles = message.mentions.roles.first()
    let give = false
  
    if(!member) return message.reply('merci de mettre un membre')
    if(!roles) return message.reply('merci de mettre un rôles (le rôle doit être supérieur au miens)')
   await member.roles.add(roles.id).then(() => { 
    message.channel.send(new MessageEmbed().setTitle('Rôle ajoutez').setDescription(`${member} à reçus le rôles <@&${roles.id}>\n**Si le rôles n'est pas ajoutez merci de mettre mon rôle plus haut ou me donner un rôle supérieur**`))})
    
    
    
 }
 module.exports.help = {
   name: "addrole",
   aliases : ['rolesadds' , "roleadd" , "roleadd"],
   category: "moderation",
   description: "Ajoute un rôle à un membre",
   usage : '<@user> <@roles>',
   isUserAdmin: false,
   permissions : [""],
   botPerms : true,
   args: false
   
 }