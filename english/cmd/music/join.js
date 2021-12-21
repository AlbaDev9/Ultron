module.exports.run = async (client , message, args, datas)  => {
    message.delete()
  if(!message.member.voice.channel) return message.reply("Thank you for being in a vocal room")
  let channel = message.member.voice.channel
 
  channel.join()
 message.channel.send(`I joined !`)
  
    
 }
 module.exports.help = {
   name: "join",
   aliases : ['j'],
   category: "music",
   description: "Join the bot in a voice room",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }