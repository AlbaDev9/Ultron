const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());
  const balanceToAdd = parseInt(args[1]);
  if (isNaN(balanceToAdd)) return message.reply('Oups ! Tu n\'a pas mis de ``nombre`` !');
  client.addBalance(client, user, balanceToAdd);
  message.channel.send(`Yes ! Tu à ajoutez ${balanceToAdd} euros à ${user} !`)
  
   
   
  

    
};

    module.exports.help = {
        name: "addbalance",
        aliases : ['addemoney', '+money'],
        category: "economy",
        description: "Permet d'ajoutez de l'argent à un utilisateur ",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        
        args: true
        }
