const db = require("quick.db")
const chn = new db.table('channel')
const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    const mesau = message.author.username
    let locked = chn.fetch(`channel_${message.guild.id}_${message.channel.id}`)
    if(locked === "on"){
        chn.set(`channel_${message.guild.id}_${message.channel.id}` , "off")
        let msg = await message.channel.send('>Chargement....')
        await msg.edit(new MessageEmbed().setTitle('Salon déverouillé').setDescription('Le salon à été déverouillé avec succès !')).then(async message => {
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
        })
        if(datas.logChannel !== "" || null){
            client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Salon déverouillé').setDescription(`Le salon ${message.channel.name} vien d'être déverrouillé par ${mesau}`))
        }
    
    }else{
    chn.set(`channel_${message.guild.id}_${message.channel.id}` , "on")
    let msg = await message.channel.send('Chargement....')
    await msg.edit(new MessageEmbed().setTitle('Salon verrouillé').setDescription('Le salon à été verrouillé avec succès !')).then(async message => {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        if(datas.logChannel !== "" || null){
            client.channels.cache.get(datas.logChannel).send(new MessageEmbed().setTitle('Salon verrouillé').setDescription(`Le salon ${message.channel.name} vien d'être verrouillé par ${mesau}`))
        }
    })
        
    }

   
}
module.exports.help = {
  name: "lock",

  permissions : ["MANAGE_CHANNELS"],
  category:  "moderation",
  description: "Vérouille/Dévérouille un salons",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}