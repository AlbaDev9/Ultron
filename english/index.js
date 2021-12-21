const {
  Client,
  Collection,
  MessageEmbed,
  MessageAttachment,
  Intents 
} = require('discord.js')
const client = new Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER'],
  allowedMentions : {
    parse : ['everyone' ,'roles' ,'users'],
    repliedUser : false
}
});
client.snipes = new Collection();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
const {
  loadCommands,
  loadEvents
} = require('./util/functions/loadCommands')
const settings = require('./config.json')
const {
  DiscordTogether
} = require('discord-together');
const Levels = require('discord-xp')
const colors = require("colors")
const fs = require('fs')
const db = require('quick.db')
const Guild = require('./db/schema/guild')
const Fonction = require('./db/schema/fonction')
const ticket = new db.table('ticket')
const DiscordVoice = require("discord-voice");
const bdd = require('./db/schema/raid')
const Voice = new DiscordVoice(client, settings.mongodbconnect);
client.discordVoice = Voice;

DisTube = require("distube"),
  distube = new DisTube(client, {
    searchSongs: false,
    emitNewSongOnly: false,
    highWaterMark: 1024 * 1024 * 64,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    youtubeDL: true,
    updateYouTubeDL: true
  });
const disbut = require('discord-buttons');
disbut(client);
client.discordTogether = new DiscordTogether(client);
module.exports.musique = distube;
Levels.setURL(settings.mongodbconnect)
const tiktok = require('tiktok-app-api')
let tiktokApp;
(async () => {
  tiktokApp = await tiktok();
})();
client.mongoose = require('./util/mongoose')
/*const logger = require('./util/functions/logs')
logger(client)*/


const userEveryoneMaps = new Map();
const UserSpamMap = new Map();
 


loadCommands(client)
loadEvents(client)

function Savebdd() {
  fs.writeFile("./config/bdd.json", JSON.stringify(bdd, null, 4), (err) => {
    if (err) message.channel.send("An error has occurred.");
});
}

/*client.on('guildCreate', async guild => {
  client.on('message', async message => {
  message.channel.send(`Salut tape -help pour avoir les commandes`)
  .then(
  message.channel.send(`Pour changer le prefix c'est -setprefix (votre prefix)`)
  )
  .then(
  message.channel.send(`Rejoint le serveur support : https://discord.gg/a5ErbKe5W9"`)
  )
  const Discord = require('discord.js')
  const client = new Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER'],
    allowedMentions : {
      parse : ['everyone' ,'roles' ,'users'],
      repliedUser : false
  }
})
    const addembed = new Discord.MessageEmbed()
        .setTitle(`**Sliwers** vient d'être ajouté sur le serveur : ${guild.name}`)
        .setThumbnail(guild.icon)
        .addField(`**👑 Propriétaire :**`, `${guild.owner}`)
        .addField(`**📇 Nom du serveur :**`, `${guild.name}`)
        .addField(`**Id du serveur:**`, `${guild.id}`)
        .addField(`**Nombre de membres:**`, `${guild.memberCount}`)
        .setColor("GREEN")
        .setTimestamp()
                                                        
        client.channels.cache.get('889756882917535814').message.send(addembed)
    
  })
})*/

client.login(settings.token)