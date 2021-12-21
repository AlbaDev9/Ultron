const { MessageEmbed } = require("discord.js")

module.exports.run = async (client , message, args, datas)  => {
const member = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
const reasons = args.splice(1).join(" ")
if(!member) return message.reply('Merci de mettre un membre ou son ID')
if(!member.bannable) return message.reply('Je ne peut pas ban ce membre...')
await message.channel.send(new MessageEmbed().setTitle("Membre bannie").setDescription(`${member} à été ban du serveur`))
await member.send(`Vous avez été ban de ${message.guild.name}\n${reasons !== null ? "Raison : " + reasons : ""}`)
message.guild.member(member).ban({reason: reasons})
   
}
module.exports.help = {
  name: "ban",
  permissions : ["BAN_MEMBERS"],
  category: "moderation",
  description: "Ban un membre",
  usage : '<@user> [<reasons>]',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}