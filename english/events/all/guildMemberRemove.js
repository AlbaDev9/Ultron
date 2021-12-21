const Left = require('../../db/schema/left')
const {MessageEmbed} = require('discord.js')
module.exports = async (client, member) => {
  const datas = await Left.findOne({GuildID: member.guild.id})
  if(!datas) return;
  let msg = datas.Content
  if(msg.includes('{user}')) msg = msg.replace('{user}', member.user.username)

    if(datas.Channel === null || undefined) return;
    client.channels.cache.get(datas.Channel).send(msg)
}
