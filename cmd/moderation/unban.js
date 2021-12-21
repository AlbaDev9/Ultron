const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
const member = args[0]
if(!member) return message.reply('Merci de mettre un membre valide (ID REQUIT)')
message.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == member)
    if(!bUser) return message.reply('Ce membre n\'est pas bannie...')
    message.guild.members.unban(bUser.user)
    message.channel.send(new MessageEmbed().setTitle("Membre unban").setDescription(`Le membre <@${member}> à été unban du serveur`))
    member.send(`Vous avez été unban de ${message.guild.name} !`)
})


   
}
module.exports.help = {
  name: "unban",

  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Unban un membre",
  usage : '<@user_id>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}