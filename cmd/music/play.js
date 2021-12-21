
module.exports.run = async (client , message, args, datas)  => {
    message.delete()

    if(!args) message.reply('Merci de mettre une musique')
    if(!message.member.voice.channel) return message.reply("Merci d'être dans un salon vocal")
    distube.play(message , args.join(" "))
    message.channel.send(`J'ai trouvé quelque chose avec comme nom => \`${args.join(" ")}\``)
 }
 module.exports.help = {
   name: "play",
   aliases : ["p"],
   category: "music",
   description: "Le bot joue de la musique dans un salon vocal",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }