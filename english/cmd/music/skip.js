
module.exports.run = async (client , message, args, datas)  => {
    message.delete()

    const bot = message.guild.members.cache.get(client.user.id)
    if(!args) message.reply('Please put some music')
    if(!message.member.voice.channel) return message.reply("Thank you for being in a vocal room")
    let channel = message.member.voice.channel
    if(bot.voice.channel !== message.member.voice.channel) return message.reply("Thank you for being in the same vocal room as me")
    distube.skip(message)

 }
 module.exports.help = {
   name: "skip",
   aliases : [""],
   category: "music",
   description: "Skip the music",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }