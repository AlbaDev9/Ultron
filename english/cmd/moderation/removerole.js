module.exports.run = async (client , message, args, datas)  => {

    const member = message.mentions.members.first()
    const roles = message.mentions.roles.first()
    if(!member) return message.reply('please add a member')
    if(!roles) return message.reply('please put a role (the role must be lower than mine)')
    if(!member.roles.has(roles.id)){
        message.reply('This person does not already have this role')
    }else{
            member.roles.remove(roles.id)
    }

 }
 module.exports.help = {
   name: "removerole",
   aliases : [],
   category: "moderation",
   description: "Add a role to a member",
   usage : '<@user> <@roles>',
   isUserAdmin: true,
   permissions : ["MANAGE_ROLES"],
   botPerms : true,
   args: false
   
 }