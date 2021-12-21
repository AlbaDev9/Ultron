const Discord = require('discord.js')




module.exports.run = async (client, message, args, datas) => {
const replies = ["Comme je le vois oui.", " Demander à nouveau plus tard.", "Mieux vaut ne pas te le dire maintenant."," Impossible de prédire maintenant."," Concentrez-vous et demandez à nouveau.","Ne comptez pas dessus.","Il est certain.","Il en est décidément ainsi.","Probablement.","Ma réponse est non.","Les perspectives ne sont pas si bonnes."," Bonne perspective.","Répondre brumeux, réessayer.","Les signes pointent vers Oui.","Très douteux.","Sans aucun doute."," Oui."," Oui définitivement."," Vous pouvez vous y fier.",];
const question = args.join(" ");
const reponse = Math.floor(Math.random() * replies.length);
const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#7d0633")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/1200px-8-Ball_Pool.svg.png")
    .addField(question, replies[reponse]);
    message.channel.send(embed)}
    module.exports.help = {
        name: "8ball",
        aliases : ['heigthball'],
        category: "fun",
      emoji: "🔮",
        description: "Répond a une question",
        usage : '<votre_question>',
        isUserAdmin: false,
       
        permissions : false,
        args: true
        }