const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
const member = args[0]
if(!member) return message.reply('Please enter a valid member (ID REQUIT)')
message.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == member)
    if(!bUser) return message.reply('This member is not banned ...')
    message.guild.members.unban(bUser.user)
    message.channel.send(new MessageEmbed().setTitle("Unban member").setDescription(`The member <@${member}> has been unban from the server`))
    member.send(`You have been unbaned from ${message.guild.name}!`)
})


   
}
module.exports.help = {
  name: "unban",

  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Unban a member",
  usage : '<@user_id>',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}