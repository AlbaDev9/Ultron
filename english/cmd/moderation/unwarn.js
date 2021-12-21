const db = require('../../db/schema/warns')
const { MessageEmbed } = require('discord.js')
module.exports.run = (client , message, args, datas) => {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nouser = new MessageEmbed()
    .setTitle('`❓`・We don\'t have enough information')
  .setColor('RED')
  .setDescription(`Please put a user made for example: ${datas.prefix}unwarn ${message.author}`)

  const deletes = new MessageEmbed()
    .setTitle('`🚮`・Warning removed')
  .setColor('GREEN')
  .setDescription(`A warning against ${user} has been removed by ${message.author}`)
  const sage = new MessageEmbed()
    .setTitle('`😇`・No warning')
  .setColor('GREEN')
  .setDescription(`${user} to no warning ! `)
    if(!user) return message.channel.send(nouser)
    db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
        if(err) throw err;
        if(data) {
            let number = parseInt(args[1]) - 1
            data.content.splice(number, 1)
  
            if(datas.logChannel === undefined){
              message.channel.send(deletes)
          }else{
              client.channels.cache.get(datas.logChannel).send(deletes)
          }
            data.save()
        } else {
            message.channel.send(sage)
        }
    })

}
module.exports.help = {
  name: "unwarn",

  permissions : ["MANAGE_MESSAGES"],
  category: "moderation",
  description: "Unwarn a member",
  usage : '',
  isUserAdmin: true,
  botPerms : false,
  args: false
  
}