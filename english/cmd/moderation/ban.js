const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
const member = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
const reasons = args.splice(1).join(" ")
if(!member) return message.reply('Please put a member or his ID')
if(!member.bannable) return message.reply('I cannot ban this member ...')
await message.channel.send(new MessageEmbed().setTitle("Banned member").setDescription(`${member} was banned from the server`))
await member.send(`You have been banned from ${message.guild.name}\n${reasons !== null ? "Raison : " + reasons : ""}`)
message.guild.member(member).ban({reason: reasons})
   
}
module.exports.help = {
  name: "ban",
  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Ban a member",
  usage : '<@user> [<reasons>]',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}