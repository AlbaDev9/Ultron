const {MessageEmbed}= require('discord.js')
module.exports.run = async (client, message, args, settings, dbUser) => {
const items = [];
const shop = require("../../divers/shop/shop.json")
const q = args.join(" ") 
const position = shop.map(e => e.name).indexOf(q);
const embed1 = new MessageEmbed()
.setTitle("Welcome to the Air'Zone store!")
shop.map(e => items.push(`${e.name} (${e.prix}euros)`));
embed1.setDescription(`Here are the different objects available: \n${items.map(item => `**${item}**`).join('\n')}`);
if (q && position == -1) message.reply("Whoops ! This object does not exist please check the name of the item! Hold the shop ") , message.channel.send(embed1)

  
    if (q && position == -1) {
            
            const achat = new MessageEmbed()
            .setTitle('Purchase Completed !')
            .addField(`Your budget is \`${dbUser.balance - item.prix}\``)
            const noconfirm = new MessageEmbed()
            .addField(`${user} ! You haven't confirmed the purchase! next time answer with \`yes \``)
            const item = shop[position];
        try { 
            
            const filter = m => (message.author.id === m.author.id);
            message.channel.send(`Do you want to buy ${item.name.toLowerCase()} for ${item.prix} euros?`);
            const userEntry = await message.channel.awaitMessage(filter, {
                max: 1, time: 20000, erros: ['times']
    })
    if (userEntry.first().content.toLowerCase() === "yes"){
        client.remouveBalance(client, message.member, item.prix);
        message.channel.send(achat)
        }

} catch (e) {
    message.channel.send(noconfirm)
}
} else {
    const embed = new MessageEmbed()
    .setTitle("Welcome to the Air'Zone store!")
    shop.map(e => items.push(`${e.name} (${e.prix}euros)`));
    embed.setDescription(`Here are the different objects available: \n${items.map(item => `**${item}**`).join('\n')}`);
    message.channel.send(embed);


 }
}



module.exports.help = {

    name: "shop",
  
    category: "economy",
    description: "Lets buy things ",
    usage : '[<objet>]',
    isUserAdmin: false,
   //cooldown: 10,
    
    args: false
    }