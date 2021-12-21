const Discord = require('discord.js')




module.exports.run = async (client, message, args, datas) => {
const replies = ["As I see it yes.", " Ask again later.", "Better not tell you now."," Impossible to predict now."," Concentrate and ask again.","Don't count on it.","It is certain.","It is definitely so.","Probably.","My answer is no.","The outlook is not that good."," Good outlook.","Reply foggy, try again.","The signs point to Yes.","Very doubtful.","Without a doubt."," Yes."," Definitely yes."," You can trust it.",];
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
        description: "Answer a question",
        usage : '<votre_question>',
        isUserAdmin: false,
       
        permissions : false,
        args: true
        }