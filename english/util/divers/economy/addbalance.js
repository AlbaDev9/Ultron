const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());
  const balanceToAdd = parseInt(args[1]);
  if (isNaN(balanceToAdd)) return message.reply('Oups ! Tu n\'a pas mis de ``nombre`` !');
  client.addBalance(client, user, balanceToAdd);
  message.channel.send(`Yes! You have to add ${balanceToAdd} euros to ${user}! `)
  
   
   
  

    
};

    module.exports.help = {
        name: "addbalance",
        aliases : ['addemoney', '+money'],
        category: "economy",
        description: "Allows you to add money to a user ",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        
        args: true
        }
