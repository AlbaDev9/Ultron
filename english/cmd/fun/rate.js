const Discord = require('discord.js')
module.exports.run =  async (client, message, args, datas) => {
    message.delete()
    let number = Math.floor(Math.random() * 101);
    if (!args[1]) {
        const embedd = new Discord.MessageEmbed()
        .setTitle('Je note')
        .setDescription('I would give you a rating ' + number + '/100')
        return message.channel.send(embedd)
    } else {
        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send('Please indicate who you rate.')
        }
        const Embed  = new Discord.MessageEmbed()
        .setTitle('Je note')
        .setDescription('Je noterais ' + user.username + ' a ' + number + '/100')
        return message.channel.send(Embed)

    }

};




module.exports.help = {
    name: "rate",
  
    category: "fun",
      emoji: "🔮",
    description: "The bot scores you / 100!",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }