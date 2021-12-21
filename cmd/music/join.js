module.exports.run = async (client , message, args, datas)  => {
    message.delete()
  if(!message.member.voice.channel) return message.reply("Merci d'être dans un salon vocal")
  let channel = message.member.voice.channel
 
  channel.join()
 message.channel.send(`J'ai rejoint !`)
  
    
 }
 module.exports.help = {
   name: "join",
   aliases : ['j'],
   category: "music",
   description: "Fait rejoindre le bot dans un salon vocal",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }