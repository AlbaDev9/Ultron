const db = require("quick.db")
const chn = new db.table('channel')
const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    const mesau = message.author.username
    let locked = chn.fetch(`channel_${message.guild.id}_${message.channel.id}`)
    if(locked === "on"){
        chn.set(`channel_${message.guild.id}_${message.channel.id}` , "off")
        let msg = await message.channel.send('>Loading....')
        await msg.edit(new MessageEmbed().setTitle('Channel unlocked').setDescription('The channel has been successfully unlocked!')).then(async message => {
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
        })
        if(datas.logChannel !== "" || null){
            client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Channel unlocked').setDescription(`The channel ${message.channel.name} has just been unlocked by ${mesau}`))
        }
    
    }else{
    chn.set(`channel_${message.guild.id}_${message.channel.id}` , "on")
    let msg = await message.channel.send('Loading.....=')
    await msg.edit(new MessageEmbed().setTitle('Channel locked').setDescription('The channel has been successfully locked!')).then(async message => {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        if(datas.logChannel !== "" || null){
            client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Channel locked').setDescription(`The channel ${message.channel.name} has just been locked by ${mesau}`))
        }
    })
        
    }

   
}
module.exports.help = {
  name: "lock",

  permissions : ["MANAGE_CHANNELS"],
  category:  "moderation",
  description: "Lock / Unlock a lounges",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}