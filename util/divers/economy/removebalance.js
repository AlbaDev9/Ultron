const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings, dbUser) => {
    const user = message.guild.member(message.mentions.users.first());
    const balanceToRemove = parseInt(args[1]);
    if (isNaN(balanceToRemove)) return message.reply('Oups ! Tu n\'a pas mis de ``nombre`` !');
    client.removeBalance(client, user, balanceToRemove);
    message.channel.send(`Yes ! Tu à enlevé ${balanceToRemove} euros à ${user} !`)
    
     
   
   
  

    
};

    module.exports.help = {
        name: "removebalance",
        aliases : ['remouveemoney', '-money'],
        category: "economy",
        description: "Permet d'ajoutez de l'argent à un utilisateur ",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        
        args: true
        }
