const Discord = require('discord.js')
module.exports.run = async (client, message, args, settings, dbUser) => {
    const dailyCD = 8.64e+7;
if (!dbUser.balance) await client.updateUser(message.member, { balance: 0 });

const lastDaily = await dbUser.daily;
if (lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
    const cdTime = dailyCD - (Date.now() - lastDaily);
    message.reply(`He stays **${Math.floor(cdTime / (1000*60*60) % 24)}hrs , ${Math.floor(cdTime / (1000*60) %60)}mins and ${Math.floor(cdTime / (1000) % 60)}** before getting your money back!`);
} else {
    client.addBalance(client, message.meber, 350);
    client.updateUser(message.member, { daily: Date.now() });
    message.reply(`You just got 350 euros !`)
}
};






module.exports.help = {

    name: "daily",
  
    category: "economy",
    description: "Add money ",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    
    args: false
    }