const {MessageEmbed}= require('discord.js')
module.exports.run = async (client, message, args, settings, dbUser) => {
const items = [];
const shop = require("../../divers/shop/shop.json")
const q = args.join(" ") 
const position = shop.map(e => e.name).indexOf(q);
const embed1 = new MessageEmbed()
.setTitle("Bienvenue dans la boutique de Air'Zone !")
shop.map(e => items.push(`${e.name} (${e.prix}euros)`));
embed1.setDescription(`Voici les différent object disponible: \n${items.map(item => `**${item}**`).join('\n')}`);
if (q && position == -1) message.reply("Oups ! Cette object n'existe pas merci de vérifier le nom de l'item ! Tien le shop ") , message.channel.send(embed1)

  
    if (q && position == -1) {
            
            const achat = new MessageEmbed()
            .setTitle('Achat Effectué !')
            .addField(`Votre budget est de \`${dbUser.balance - item.prix}\``)
            const noconfirm = new MessageEmbed()
            .addField(`${user} ! Tu n'a pas confirmé l'achat ! la prochaines fois réponde par \`oui\``)
            const item = shop[position];
        try { 
            
            const filter = m => (message.author.id === m.author.id);
            message.channel.send(`Voulez vous acheter ${item.name.toLowerCase()} pour ${item.prix}euros ?`);
            const userEntry = await message.channel.awaitMessage(filter, {
                max: 1, time: 20000, erros: ['times']
    })
    if (userEntry.first().content.toLowerCase() === "oui"){
        client.remouveBalance(client, message.member, item.prix);
        message.channel.send(achat)
        }

} catch (e) {
    message.channel.send(noconfirm)
}
} else {
    const embed = new MessageEmbed()
    .setTitle("Bienvenue dans la boutique de Air'Zone !")
    shop.map(e => items.push(`${e.name} (${e.prix}euros)`));
    embed.setDescription(`Voici les différent object disponible: \n${items.map(item => `**${item}**`).join('\n')}`);
    message.channel.send(embed);


 }
}



module.exports.help = {

    name: "shop",
  
    category: "economy",
    description: "Permet d'achetez des choses ",
    usage : '[<objet>]',
    isUserAdmin: false,
   //cooldown: 10,
    
    args: false
    }