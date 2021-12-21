const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings, dbUser) => {
    const user = message.guild.member(message.mentions.users.first());
    const balanceToRemove = parseInt(args[1]);
    if (isNaN(balanceToRemove)) return message.reply('Oups ! Tu n\'a pas mis de ``nombre`` !');
    client.removeBalance(client, user, balanceToRemove);
    message.channel.send(`Yes! You removed ${balanceToRemove} euros from $ {user}!`)
    
     
   
   
  

    
};

    module.exports.help = {
        name: "removebalance",
        aliases : ['remouveemoney', '-money'],
        category: "economy",
        description: "Allows you to add money to a user",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        
        args: true
        }
