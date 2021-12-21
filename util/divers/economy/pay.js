const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args, settings, dbUser) => {
  const monnaie = parseInt(args[1]);
  const getter = message.guild.member(message.mentions.users.first());

  const achat = new MessageEmbed()
    .setTitle("échange Effectué !")
    .addField(`Votre budget est de \`${dbUser.balance - monnaie}\``);
  const noconfirm = new MessageEmbed().addField(
    `Tu n'a pas confirmé l'achat ! la prochaines fois réponde par \`oui\``
  );
  const ping = new MessageEmbed().addField(
    "merci de mentionner la personne et le montant !"
  );
  

  if (dbUser.balance < monnaie)
    return message.reply(
      `Oups ! Tu n'a pas assez d'argent ! Votre solde\`${dbUser.balance}\`  `
    );
  if (getter && !isNan(monnaie)) {
    try {
      const filter = (m) => message.author.id === m.author.id;
      message.channel.send(
        `Voulez vous payé ${getter} pour ${monnaie} ? (merci de répondre oui ou non !)`
      );
      const userEntry = await message.channel.awaitMessage(filter, {
        max: 1,
        time: 20000,
        erros: ["times"],
      });
      if (userEntry.first().content.toLowerCase() === "oui") {
        client.addBalance(client, message.member, monnaie);
        client.remouveBalance(client, message.member, monnaie);
        message.channel.send(achat);
      }
    } catch (e) {
      message.channel.send(noconfirm);
    }
  } else {
    message.reply(ping);
  }
};

module.exports.help = {
  name: "pay",
  aliases: [""],
  category: "economy",
  description: "Permet d'achetez des choses ",
  usage: "<@user> <prix>",
  isUserAdmin: false,
 //cooldown: 10,
  permissions: false,
  args: true,
};
