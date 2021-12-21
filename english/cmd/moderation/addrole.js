const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
   
    const member = message.mentions.members.first()
    const roles = message.mentions.roles.first()
    let give = false
    if(!member) return message.reply('please add a member')
    if(!roles) return message.reply('please put a role (the role must be greater than mine)')
   await member.roles.add(roles.id).then(() => { 
    message.channel.send(new MessageEmbed().setTitle('Role add').setDescription(`${member} received the role <@&${roles.id}>\n ** If the role is not add please put my role higher or give me a higher role **`))})
    
    
    
 }
 module.exports.help = {
   name: "addrole",
   aliases : ['rolesadds' , "roleadd" , "roleadd"],
   category: "moderation",
   description: "Add a role to a member",
   usage : '<@user> <@roles>',
   isUserAdmin: false,
   permissions : ["MANAGE_ROLES"],
   botPerms : true,
   args: false
   
 }