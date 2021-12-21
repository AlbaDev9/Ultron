module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    if(!message.member.voice.channel) return message.reply("Merci d'être dans un salon vocal")
    let channel = message.member.voice.channel

    const bot = message.guild.members.cache.get(client.user.id)
    if(bot.voice.channel !== message.member.voice.channel) return message.reply("Merci d'être dans le même salon vocal que moi")
    channel.leave()
        message.channel.send(`J'ai quitté !`)
 }
 module.exports.help = {
   name: "leave",
   aliases : ['l'],
   category: "music",
   description: "Fait partir le bot d'un salon vocal",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }