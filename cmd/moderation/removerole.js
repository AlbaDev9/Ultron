module.exports.run = async (client , message, args, datas)  => {

    const member = message.mentions.members.first()
    const roles = message.mentions.roles.first()
    if(!member) return message.reply('merci de mettre un membre')
    if(!roles) return message.reply('merci de mettre un rôles (le rôle doit être inférieur au miens)')
    if(!member.roles.has(roles.id)){
        message.reply('Cette personne n\'a déja pas ce rôles')
    }else{
            member.roles.remove(roles.id)
    }

 }
 module.exports.help = {
   name: "removerole",
   aliases : [],
   category: "moderation",
   description: "Ajoute un rôle à un membre",
   usage : '<@user> <@roles>',
   isUserAdmin: true,
   permissions : ["MANAGE_ROLES"],
   botPerms : true,
   args: false
   
 }