module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    if(!message.member.voice.channel) return message.reply("Thank you for being in a vocal room")
    let channel = message.member.voice.channel

    const bot = message.guild.members.cache.get(client.user.id)
    if(bot.voice.channel !== message.member.voice.channel) return message.reply("Thank you for being in the same vocal room as me")
    channel.leave()
        message.channel.send(`I left !`)
 }
 module.exports.help = {
   name: "leave",
   aliases : ['l'],
   category: "music",
   description: "Start the bot from a voice room",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }