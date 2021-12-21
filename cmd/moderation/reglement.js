const {MessageEmbed} = require('discord.js');


module.exports.run = async (client , message, args, datas)  => {   
    message.delete()
    const help = new MessageEmbed()
    .setColor("BLUE")
    .setImage('https://www.ins7de-gaming.be/wp-content/uploads/2019/03/Reglement_6.png')
    .setDescription('Bonjour et bienvenue a toi!\nAfin d\'avoir une bonne entente avec tous les membres, je t\'invite à lire ce règlement:\n\n➔ 𝙄𝙣𝙩𝙚𝙧𝙙𝙞𝙘𝙩𝙞𝙤𝙣𝙨\n✘Spam\n✘Insultes\n✘Contenus inappropriés (Ex: Images/Vidéos pornographiques, etc...)\n✘Pubs (Que ce soit sur le discord ou en privé.)\n✘Mentions du staff en continu (Si on ne vous répond pas c\'est que nous ne pouvons pas.)\n✘Menaces (Ex: Hack, etc..)\n✘Partage d\'informations privées (A titre personnel) (Ex: Photo, Prénom, Nom, etc...)\n✘Troll\n✘Imposer son opinion / propagande\n✘DM Pub (MP) \n✘Usurpation d\'identité\n\n➔ 𝘼𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣𝙨\n✓Discuter dans les salons tout en respectant le règlement\n✓Discuter vocalement tout en respectant le règlement\n✓Donner un(des) opinion(s) (Constructif(s))\n✓Report des Bugs\n✓Dm(MP) le bot pour des questions ou commandes\n✓ Et passer un agréable jeux sur notre serveur !')

    message.channel.send(help)
}

    module.exports.help = {
        name: "reglement",
        aliases : ['rglmt'],
        permissions : ["MANAGE_MESSAGES"],
        category: "moderation",
        description: "Affiche un reglement",
        usage : '[<command_name>]',
        isUserAdmin: false,
        botPerms : false,
        args: false
        
      }
