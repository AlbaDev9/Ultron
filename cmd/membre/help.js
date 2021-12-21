const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const disbut = require('discord-buttons');
module.exports.run = async (bot, message, args, datas) => {

        const PREMIUM = new Discord.MessageEmbed()
        .setTitle('PREMIUM')
        .setColor('RED')
        .addField(`${datas.prefix}backup`, 'Utiliser les fonctions de backup')
        .addField(`${datas.prefix}anti-join`, 'Active/désactive le mode ANTI-JOIN')
        .addField(`${datas.prefix}anti-insulte`, 'Active/désactive le mode ANTI-INSULTE')
        .addField(`${datas.prefix}anti-link`, 'Active/désactive le mode ANTI-LINK')
        .addField(`pour plus d\'information sur le premium:`, `faites ${datas.prefix}invite et rejoignez le serveur`)
        .setTimestamp()

        const MUSIC = new Discord.MessageEmbed()
                .setTitle('MUSIC')
                .setColor('GREEN')
                .addField(`${datas.prefix}join`, 'Fait rejoindre le bot dans un salon vocal')
                .addField(`${datas.prefix}leave`, 'Fait partir le bot d\'un salon vocal')
                .addField(`${datas.prefix}play`, 'Le bot joue de la musique dans un salon vocal')
                .addField(`${datas.prefix}skip`, 'Skip la musique')
                .setTimestamp()

        const MEMBER = new Discord.MessageEmbed()
                .setTitle('MEMBER')
                .setColor('GREEN')
                .addField(`${datas.prefix}help`, 'Affiche la liste de commande')
                .addField(`${datas.prefix}date`, 'Dit la date et l\'heure')
                .addField(`${datas.prefix}rank`, 'Affiche votre exp sur le serveur')
                .addField(`${datas.prefix}infobot`, 'Regarde les infos du bot')
                .addField(`${datas.prefix}invite`, 'Invite le bot')
                .addField(`${datas.prefix}reports`, 'Reporte un bug du serveur')
                .addField(`${datas.prefix}reportsbot`, 'Reporte un bug du bot')
                .addField(`${datas.prefix}serveurinfo`, 'Obtient toute les infos du serveur')
                .addField(`${datas.prefix}suggest`, 'Envoie une suggestion')
                .addField(`${datas.prefix}user-stats`, 'Regarde le nombre de membre connecter ou non')
                .setTimestamp()


        const FUN = new Discord.MessageEmbed()
                .setTitle('FUN')
                .setColor('GREEN')
                .addField(`${datas.prefix}8ball`, 'Répond a une question')
                .addField(`${datas.prefix}avatar`, 'Affiche son avatar')
                .addField(`${datas.prefix}calin`, 'Permet de faire un calin a une personnes de votre choix')
                .addField(`${datas.prefix}dance`, 'dancer !')
                .addField(`${datas.prefix}kiss`, 'Fait un bisous a une personnes de votre choix')
                .addField(`${datas.prefix}minecraft`, 'affiche une image de succès')
                .addField(`${datas.prefix}morpions`, 'joue au morpions')
                //.addField(`${datas.prefix}pendu`, 'joue au pendu')
                //.addField(`${datas.prefix}qrcode`, 'permet de crée un qrcode')
                .addField(`${datas.prefix}rate`, 'Le bot vous note /100 !')
                .addField(`${datas.prefix}rpc`, 'pierre, feuille,ciseaux')
                .addField(`${datas.prefix}snake`, 'Permet de jouer a un jeu')
                .addField(`${datas.prefix}sus`, 'Image among us aveec ecrit SUS')
                .addField(`${datas.prefix}weather`, 'Permet de voir la météo')
                .setTimestamp()


        const CONFIGURATION = new Discord.MessageEmbed()
                .setTitle('CONfIGURATION')
                .setColor('RED')
                .addField(`${datas.prefix}setlang`, 'Configure the bot language')
                .addField(`${datas.prefix}left`, 'Active/désactive le système d\'aurevoir')
                .addField(`${datas.prefix}level`, 'Active/desactive la fonction de niveaux')
                .addField(`${datas.prefix}setlogs`, 'Active/desactive le salon des logs du bot')
                .addField(`${datas.prefix}setprefix`, 'Change le prefix du bot')
                .addField(`${datas.prefix}suggest-admin`, 'Configure le système de suggestion')
                .addField(`${datas.prefix}ticket`, 'Config le système de ticket')
                .addField(`${datas.prefix}welcome`, 'Config le système de bienvenue')
                .setTimestamp()

        const MODERATION = new Discord.MessageEmbed()
                .setTitle('MODERATION')
                .setColor('RED')
                .addField(`${datas.prefix}backup-false`, 'Crée des backups')
                .addField(`${datas.prefix}addrole`, 'Ajoute un rôle à un membre')
                .addField(`${datas.prefix}removerole`, 'Enlève un rôle à un membre')
                .addField(`${datas.prefix}warn`, 'Warn un membre')
                .addField(`${datas.prefix}unwarn`, 'Unwarn un membre')
                .addField(`${datas.prefix}ban`, 'Ban un membre')
                .addField(`${datas.prefix}unban`, 'Unban un membre')
                .addField(`${datas.prefix}tempsban`, 'Ban un membre temporairement')
                .addField(`${datas.prefix}mute`, 'Mute un membre')
                .addField(`${datas.prefix}tempsmute`, 'Mute un membre temporairement')
                .addField(`${datas.prefix}unmute`, 'Démute un membre')
                .addField(`${datas.prefix}infraction`, 'Regarde les warns d\'un membre')
                .addField(`${datas.prefix}clear`, 'Supprime un nombre de message (0-100)')
                .addField(`${datas.prefix}nuke`, 'Supprime nu nombre de message qui provient d\'une personne')
                .addField(`${datas.prefix}deletechannel`, 'Delete un channel')
                .addField(`${datas.prefix}kick`, 'Kick un membre')
                .addField(`${datas.prefix}lock`, 'Vérouille/Dévérouille un salons')
                .addField(`${datas.prefix}userinfo`, 'Permet de savoir des information sur un membre')
                .addField(`${datas.prefix}reglement`, 'Affiche un reglement')
                .addField(`${datas.prefix}say`, 'Envoi ton message sous embed')
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
                description: "Affiche la liste de commande",
                usage: '[<command_name>]',
                isUserAdmin: false,
                botPerms: false,
                args: false

        }