const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings, dbUser) => {
    const user = message.guild.member(message.mentions.users.first()); 
    if(args[0]) {
        const mentionnedUser = await client.getUser(user);
        const userxp = new Discord.MessageEmbed()
        .setTitle('Commande effectué')
        .setDescription(`${user} à ${mentionnedUser.balance} euros !`)
        
        message.channel.send(userxp)
    } else {
    const embed = new Discord.MessageEmbed()
    .setTitle('Votre Argent !')
    .setDescription(` Tu as ${dbUser.balance} euros !`)

    
        message.reply(embed)
    }
    
    
   
    
    
};

    module.exports.help = {
        name: "money",
        aliases : ['ee', 'ue'],
        category: "economy",
        description: "Permet de voir votre Xp",
        usage : '<@user>',
        isUserAdmin: false,
       //cooldown: 10,
        
        args: true
        }
