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
        return message.reply('Whoops ! Please rate a user');
    }
    if(user === message.author){
        message.reply('you can\'t kiss yourself lie to another person')
        return;
    }
    let avatar = message.author.displayAvatarURL({format: 'png'});
    const kiss = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.author} give a kiss to ${user}`)
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
    description: "Give a kiss to a person of your choice",
    usage : '<@user>',
    isUserAdmin: false,
   
    permissions : false,
    args: true
    }