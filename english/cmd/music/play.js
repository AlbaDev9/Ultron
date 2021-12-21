
module.exports.run = async (client , message, args, datas)  => {
    message.delete()

    if(!args) message.reply('Please put some music')
    if(!message.member.voice.channel) return message.reply("Thank you for being in a vocal room")
    distube.play(message , args.join(" "))
    message.channel.send(`I found something with the name => \`${args.join(" ")}\``)
 }
 module.exports.help = {
   name: "play",
   aliases : ["p"],
   category: "music",
   description: "The bot plays music in a vocal room",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }