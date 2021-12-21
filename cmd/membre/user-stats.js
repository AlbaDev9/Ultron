const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();
module.exports.run = async (bot, message, args,) => {

    let onlines = message.guild.members.cache.filter(({ presence}) => presence.status == 'online').size;
    let offlines = message.guild.members.cache.filter(({ presence}) => presence.status == 'offline').size;
    let Afk = message.guild.members.cache.filter(({ presence}) => presence.status == 'idle').size;
    let Occupé = message.guild.members.cache.filter(({ presence}) => presence.status == 'dnd').size;
    let totalmembers = message.guild.members.cache.size;
    const StatsEmbed = new Discord.MessageEmbed()
    //    .setColor('BLUE')
        .setTitle('Stats Du Serveur')
        .setAuthor('Stats')
        .setDescription('Voici Les Stats Du Serveur')
        .setThumbnail('')
        .addFields(
            { name: 'En Ligne : ', value: onlines, inline: false },
            { name: 'Inactif : ', value: Afk, inline: false },
            { name: 'Dnd : ', value: Occupé, inline: false },
            { name: 'Hors lignes : ', value: offlines, inline: false },
            { name: 'Au total : ', value: totalmembers, inline: false },
            )
        .setImage('')
        .setTimestamp()
        .setFooter('Stats Du Serveur', '');

message.channel.send(StatsEmbed);
}
module.exports.help = {
    name: "user-stats",
    category: "membre",
    description: "Regarde le nombre de membre connecter ou non"
    }