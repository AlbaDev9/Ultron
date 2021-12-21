const Discord = require('discord.js');


module.exports.run = async  (client, message, args, datas) => {
   
    var list = [
        'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
        'https://i.pinimg.com/originals/7e/28/71/7e28715f3c114dc720688f1a03abc5f5.gif',
        'https://imgur.com/w1TU5mR.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)] ;
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user){
        return message.reply('Oups ! Merci de mensionnez un utilisateur');
    }
    if(user === message.author){
        message.reply('vous ne pouvez pas faire de bisous à vous même mensionnez une autre personne')
        return;
    }
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const kiss = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.author} fait un bisous à ${user}`)
    .setImage(rand)
    .setTimestamp()
    .setAuthor(message.author.tag, avatar)
    await message.channel.send(kiss);
}

module.exports.help = {
    name: "kiss",
    aliases : ['bisous'],
    category: "fun",
      emoji: "🔮",
    description: "Fait un bisous a une personnes de ton choix",
    usage : '<@user>',
    isUserAdmin: false,
   
    permissions : false,
    args: true
    }