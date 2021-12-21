const Discord = require('discord.js')
module.exports.run = async (client, message, args, settings, dbUser) => {
    const dailyCD = 8.64e+7;
if (!dbUser.balance) await client.updateUser(message.member, { balance: 0 });

const lastDaily = await dbUser.daily;
if (lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
    const cdTime = dailyCD - (Date.now() - lastDaily);
    message.reply(`Il reste **${Math.floor(cdTime / (1000*60*60) % 24)}hrs , ${Math.floor(cdTime / (1000*60) %60)}mins et ${Math.floor(cdTime / (1000) % 60)}** avant de récuperer votre argent du jours !`);
} else {
    client.addBalance(client, message.meber, 350);
    client.updateUser(message.member, { daily: Date.now() });
    message.reply(`Tu vient de gangé 350 euros !`)
}
};






module.exports.help = {

    name: "daily",
  
    category: "economy",
    description: "Ajoute de l'argent ",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    
    args: false
    }