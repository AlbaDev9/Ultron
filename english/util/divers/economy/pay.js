const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args, settings, dbUser) => {
  const monnaie = parseInt(args[1]);
  const getter = message.guild.member(message.mentions.users.first());

  const achat = new MessageEmbed()
    .setTitle("Exchange Done!")
    .addField(`Your budget is \`${dbUser.balance - monnaie}\``);
  const noconfirm = new MessageEmbed().addField(
    `You haven't confirmed the purchase! next time answer with \`yes \``
  );
  const ping = new MessageEmbed().addField(
    "please mention the person and the amount!"
  );
  

  if (dbUser.balance < monnaie)
    return message.reply(
      `Whoops ! You don't have enough money! Your balance \`${dbUser.balance} \`  `
    );
  if (getter && !isNan(monnaie)) {
    try {
      const filter = (m) => message.author.id === m.author.id;
      message.channel.send(
        `Do you want to pay ${getter} for ${monnaie}? (please answer yes or no!)`
      );
      const userEntry = await message.channel.awaitMessage(filter, {
        max: 1,
        time: 20000,
        erros: ["times"],
      });
      if (userEntry.first().content.toLowerCase() === "yesv") {
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
  description: "Lets buy things ",
  usage: "<@user> <prix>",
  isUserAdmin: false,
 //cooldown: 10,
  permissions: false,
  args: true,
};
