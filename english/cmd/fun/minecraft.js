const {
  MessageEmbed
} = require('discord.js')
module.exports.run = async (client, message, args, datas) => {
  message.delete()
  const embed = new MessageEmbed()
      .setColor(303136)
      .setDescription(
          "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩\n🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩\n🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩\n🟩🟫🟫🟩🟫🟩🟩🟩🟫🟫🟩🟩🟩🟫🟩\n🟫🟫🟩🟩🟫🟫🟩🟫🟩🟫🟫🟩🟫🟫🟩\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫"
      );
  message.channel.send(embed);

}
module.exports.help = {
  name: "minecraft",
  
  category: "fun",
    emoji: "🔮",
  description: "Minecraft Image",
  usage: '',
  isUserAdmin: false,

  permissions: false,
  args: false
}