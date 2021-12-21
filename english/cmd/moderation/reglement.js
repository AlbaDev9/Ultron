const {MessageEmbed} = require('discord.js');


module.exports.run = async (client , message, args, datas)  => {   
    message.delete()
    const help = new MessageEmbed()
    .setColor("BLUE")
    .setImage('https://www.ins7de-gaming.be/wp-content/uploads/2019/03/Reglement_6.png')
    .setDescription('Hello and welcome to you! \ NIn order to have a good understanding with all members, I invite you to read these rules: \ n \ n➔ disallow𝙨 \ n✘Spam \ n✘Insults \ n✘ Inappropriate content ( Ex: Pornographic images / videos, etc. can not.) \ n✘ Threats (Ex: Hack, etc ..) \ n✘ Sharing of private information (For personal reasons) (Ex: Photo, First name, Last name, etc ...) \ n✘Troll \ n✘ Impose one\'s opinion / propaganda \n✘DM Pub (MP) \n✘Isurpation of identity \n \n➔ 𝘼llowed \n✓Discuss in lounges while respecting the rules \n✓Discuss vocally while respecting the regulation  \n✓Give an opinion (s) (Constructive) \ n✓Bug reporting \n✓Dm (MP) the bot for questions or orders \n✓ And have a nice game on our server !')

    message.channel.send(help)
}

    module.exports.help = {
        name: "reglement",
        aliases : ['rglmt'],
        permissions : ["MANAGE_MESSAGES"],
        category: "moderation",
        description: "Affiche un reglement",
        usage : '[<command_name>]',
        isUserAdmin: false,
        botPerms : false,
        args: false
        
      }
