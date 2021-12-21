const {
    MessageEmbed
} = require('discord.js')
module.exports.run = async (client, message, args, datas) => {
    message.delete()
    const embed = new MessageEmbed()
        .setColor(303136)
        .setDescription(
            "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬛⬛⬛⬛⬜⬜⬜⬛⬜⬛⬜⬛⬜⬜⬜⬛\n⬛🟥🟥🟥⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛\n⬛🟥🟦🟦⬛⬜⬜⬜⬛⬜⬛⬜⬛⬜⬜⬜⬛\n⬛🟥🟥🟥⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛\n⬛🟥⬛🟥⬛⬜⬜⬜⬛⬜⬜⬜⬛⬜⬜⬜⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛"
        );
    message.channel.send(embed);

}
module.exports.help = {
    name: "sus",
    
    category: "fun",
      emoji: "🔮",
    description: "Image among us with written SUS",
    usage: '<city>>',
    isUserAdmin: false,

    permissions: false,
    args: false
}