module.exports.run = async (client , message, args, datas)  => {
  const pos = message.channel.position;
    
  if (!message.channel.parentID) {
      message.channel.clone({ position: message.channel.rawPosition }).then((ch) => {
        ch.send("Salons reset \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 50000 }));
      });
    } else {
      message.channel.clone({ parent: message.channel.parentID, position: message.channel.rawPosition }).then((ch) => {
        ch.send("Salons reset \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 50000 }));
      });
    }
    message.channel.delete();
  

   
}
module.exports.help = {
  name: "resetchannel",
  aliases : ['clearchannel'],
  permissions : ["MANAGE_CHANNELS"],
  category: "moderation",
  description: "Clear un channel",
  usage : '',
  isUserAdmin: false,
  botPerms : true,
  args: false
  
}