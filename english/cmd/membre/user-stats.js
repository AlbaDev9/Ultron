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
            { name: 'Online : ', value: onlines, inline: false },
            { name: 'Idle : ', value: Afk, inline: false },
            { name: 'Do not disturb : ', value: Occupé, inline: false },
            { name: 'Offlines : ', value: offlines, inline: false },
            { name: 'In Total : ', value: totalmembers, inline: false },
            )
        .setImage('')
        .setTimestamp()
        .setFooter('Server Stats', '');

message.channel.send(StatsEmbed);
}
module.exports.help = {
    name: "user-stats",
    category: "membre",
    description: "See the number of members to connect or not"
    }