const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const disbut = require('discord-buttons');
module.exports.run = async (bot, message, args, datas) => {

        const PREMIUM = new Discord.MessageEmbed()
        .setTitle('PREMIUM')
        .setColor('RED')
        .addField(`${datas.prefix}backup`, 'Use the backup functions')
        .addField(`${datas.prefix}anti-join`, 'Enables / disables ANTI-JOIN mode')
        .addField(`${datas.prefix}anti-insulte`, 'Activate / deactivate ANTI-INSULTE mode')
        .addField(`${datas.prefix}anti-link`, 'Activate / deactivate ANTI-LINK mode')
        .addField(`for more information on the premium:`, `make ${datas.prefix}invite and join the server`)
        .setTimestamp()

        const MUSIC = new Discord.MessageEmbed()
                .setTitle('MUSIC')
                .setColor('GREEN')
                .addField(`${datas.prefix}join`, 'Join the bot in a voice room')
                .addField(`${datas.prefix}leave`, 'Start the bot from a voice room')
                .addField(`${datas.prefix}play`, 'The bot plays music in a vocal room')
                .addField(`${datas.prefix}skip`, 'Skip the music')
                .setTimestamp()

        const MEMBER = new Discord.MessageEmbed()
                .setTitle('MEMBER')
                .setColor('GREEN')
                .addField(`${datas.prefix}help`, 'Show order list')
                .addField(`${datas.prefix}date`, 'Say the date and time')
                .addField(`${datas.prefix}rank`, 'Displays your exp on the server')
                .addField(`${datas.prefix}infobot`, 'Look at the bot info')
                .addField(`${datas.prefix}invite`, 'Invite the bot')
                .addField(`${datas.prefix}reports`, 'Report a server bug')
                .addField(`${datas.prefix}reportsbot`, 'Report a bot bug')
                .addField(`${datas.prefix}serveurinfo`, 'Get all the info from the server')
                .addField(`${datas.prefix}suggest`, 'Send a suggestion')
                .addField(`${datas.prefix}user-stats`, 'See the number of members to connect or not')
                .setTimestamp()


        const FUN = new Discord.MessageEmbed()
                .setTitle('FUN')
                .setColor('GREEN')
                .addField(`${datas.prefix}8ball`, 'Answer a question')
                .addField(`${datas.prefix}avatar`, 'Shows his avatar')
                .addField(`${datas.prefix}calin`, 'Allows you to hug a person of your choice')
                .addField(`${datas.prefix}dance`, 'dance!')
                .addField(`${datas.prefix}kiss`, 'Give a kiss to a person of your choice')
                .addField(`${datas.prefix}minecraft`, 'minecraft logo poster')
                .addField(`${datas.prefix}morpions`, 'play crabs')
                //.addField(`${datas.prefix}pendu`, 'joue au pendu')
                //.addField(`${datas.prefix}qrcode`, 'permet de crée un qrcode')
                .addField(`${datas.prefix}rate`, 'The bot scores you / 100!')
                .addField(`${datas.prefix}rpc`, 'stone, paper, scissors')
                .addField(`${datas.prefix}snake`, 'Lets play a game')
                .addField(`${datas.prefix}sus`, 'Image among us with written SUS')
                .addField(`${datas.prefix}weather`, 'Allows you to see the weather')
                .setTimestamp()


        const CONFIGURATION = new Discord.MessageEmbed()
                .setTitle('CONfIGURATION')
                .setColor('RED')
                .addField(`${datas.prefix}setlang`, 'Configure the bot language')
                .addField(`${datas.prefix}left`, 'Activate / deactivate the goodbye system')
                .addField(`${datas.prefix}level`, 'Activate / deactivate the levels function')
                .addField(`${datas.prefix}setlogs`, 'Activate / deactivate the bot log lounge')
                .addField(`${datas.prefix}setprefix`, 'Change the bot prefix')
                .addField(`${datas.prefix}suggest-admin`, 'Configure the suggestion system')
                .addField(`${datas.prefix}ticket`, 'Config the ticket system')
                .addField(`${datas.prefix}welcome`, 'Config the welcome system')
                .setTimestamp()

        const MODERATION = new Discord.MessageEmbed()
                .setTitle('MODERATION')
                .setColor('RED')
                .addField(`${datas.prefix}backup-false`, 'Create backups')
                .addField(`${datas.prefix}addrole`, 'Add a role to a member')
                .addField(`${datas.prefix}removerole`, 'Removes a role from a member')
                .addField(`${datas.prefix}warn`, 'Warn a member')
                .addField(`${datas.prefix}unwarn`, 'Unwarn a member')
                .addField(`${datas.prefix}ban`, 'Ban a member')
                .addField(`${datas.prefix}unban`, 'Unban a member')
                .addField(`${datas.prefix}tempsban`, 'Ban a member temporarily')
                .addField(`${datas.prefix}mute`, 'Mute a member')
                .addField(`${datas.prefix}tempsmute`, 'Mute a member temporarily')
                .addField(`${datas.prefix}unmute`, 'Demute a member')
                .addField(`${datas.prefix}infraction`, 'Watch a member\'s warns')
                .addField(`${datas.prefix}clear`, 'Delete a number of messages (0-100)')
                .addField(`${datas.prefix}nuke`, 'Delete a number of messages that come from a person')
                .addField(`${datas.prefix}deletechannel`, 'Delete a channel')
                .addField(`${datas.prefix}kick`, 'Kick a member')
                .addField(`${datas.prefix}lock`, 'Lock / Unlock a channel')
                .addField(`${datas.prefix}userinfo`, 'Allows you to know information about a member')
                .addField(`${datas.prefix}reglement`, 'Displays a rule')
                .addField(`${datas.prefix}say`, 'Send your message under embed')
                .setTimestamp()

        const pages = [
                PREMIUM,
                MUSIC,
                MEMBER,
                FUN,
                CONFIGURATION,
                MODERATION
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000000';
        
        pagination(message, pages, emojiList, timeout)
},
        module.exports.help = {
                name: "help",
                aliases: ['aide'],
                permissions: false,
                category: "membre",
                description: "Show order list",
                usage: '[<command_name>]',
                isUserAdmin: false,
                botPerms: false,
                args: false

        }