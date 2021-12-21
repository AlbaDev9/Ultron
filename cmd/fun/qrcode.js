const QRCode = require('qrcode')
const Discord = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    message.delete()
    let text = args.splice(0).join(' ')
    if(!text) message.reply('Merci de mettre un text à votre QR code')
    let image = await QRCode.toBuffer(text)
    message.channel.send(new Discord.MessageAttachment(image , "qrcode.png"))
    
 }
 module.exports.help = {
   name: "qrcode",
 
   category: "fun",
      emoji: "🔮",
   description: "permet de crée un qrcode",
   usage : '<text>',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }