
module.exports.run = async (client , message, args, datas)  => {
    message.delete()

    const bot = message.guild.members.cache.get(client.user.id)
    if(!args) message.reply('Merci de mettre une musique')
    if(!message.member.voice.channel) return message.reply("Merci d'être dans un salon vocal")
    let channel = message.member.voice.channel
    if(bot.voice.channel !== message.member.voice.channel) return message.reply("Merci d'être dans le même salon vocal que moi")
    distube.skip(message)

 }
 module.exports.help = {
   name: "skip",
   aliases : [""],
   category: "music",
   description: "Skip la musique",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }