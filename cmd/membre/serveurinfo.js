const {MessageEmbed} = require('discord.js')
module.exports.run = async (client , message, args, datas)  => {
    const guild = message.guild;
    const explicitContentFilter = {
        "DISABLED" : "Désactivé",
        "MEMBERS_WITHOUT_ROLES" : "Ceux ne possèdant pas de rôle",
        "ALL_MEMBERS" : "Sur tout les membres"
    }
 
    const verificationLevelFilter = {
        "NONE" : "Aucune",
        "LOW" : "Basse",
        "MEDIUM" : "Moyenne",
        "HIGH" : "Élevé",
        "VERY_HIGH" : "Très élevé"
 
    }
    const regions = {
        "europe": "Europe"
    }
    const emojis = guild.emojis.cache.sort((a, b) => b.position - a.position).map(e => e.toString())
    const emojisize = guild.emojis.cache.size
    var emojiList = 0
    if(emojisize > 15) {
        emojiList = `>>> ${emojis.splice(0, 15).join(", ")} & **${emojisize - 15} autres**`
    } else {
        emojiList = `>>> ${emojis.join(", ")}`
    }

    const roles = guild.roles.cache.sort((a, b) => b.position - a.position).map(r => r.toString())
    const rolesize = guild.roles.cache.size
    var roleList = 0
    if(rolesize > 10) {
        roleList = `>>> ${roles.splice(0, 10).join(", ")} & **${rolesize - 10} autres**`
    } else {
        roleList = `>>> ${roles.join(", ")}`
    }
    
    const member = message.guild.members.cache
    const onlines = member.filter(u => u.presence.status === 'online').size
    const dnd = member.filter(u => u.presence.status === 'dnd').size
    const idle = member.filter(u => u.presence.status === 'idle').size
    const offline = member.filter(u => u.presence.status === 'offline').size
    
    function moment(time){
        const createdAt = new Date(time)
    
        return createdAt.toLocaleDateString()
    
    }
    
    const embed = new MessageEmbed()
    .setAuthor(guild.name, guild.iconURL())
    .setColor("BLUE")
    .setThumbnail(guild.iconURL({size: 1024, dynamic: true}))
    .addField(`👑 Propriétaire:`, `${guild.owner}`, true)
    .addField(`💻 ID:`, `\`${guild.id}\``, true)
    .addField(`🌎 Région:`, `${regions[guild.region]}`, true)
    .addField(`📆 Créé le:`, `\`${moment(guild.createdTimestamp)}\``, true)
    .addField(`🔧 Vérification:`, `${verificationLevelFilter[guild.verificationLevel]}`, true)
    .addField(`📛 Filtre de contenu:`, `${explicitContentFilter[guild.explicitContentFilter]}`, true)
    .addField(`📺 Salons (${message.guild.channels.cache.size})`, `\`Textuel(s)\` [»](https://discord.com) ${message.guild.channels.cache.filter(channel => channel.type === 'text').size}\n\`Vocaux\` [»](https://discord.com) ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}\n\`Catégories\` [»](https://discord.com) ${message.guild.channels.cache.filter(channel => channel.type === 'category').size}`, true)
    .addField(`😴 Salon AFK:`, `\`Salon\` [»](https://discord.com) ${guild.afkChannel === null ? "Aucun" : guild.afkChannel}\n\`Temps\` [»](https://discord.com) **${guild.afkTimeout}**`, true)
    .addField(`📂 Rôles:`, `${roleList}`)
    .addField(`🤣 Emojis:`, `${emojiList}`)
    .addField(`⭐ Nitro boost`, `\`Niveau\` [»](https://discord.com) **${message.guild.premiumTier}**\n\`Nbr de boost\` [»](https://discord.com) **${message.guild.premiumSubscriptionCount}**`)
    
    .addField(`👥 Membres » ${message.guild.memberCount}
    `, `
    ────────────
    **${message.guild.members.cache.filter(member => !member.user.bot).size}** Humains [»](https://discord.com) **${message.guild.members.cache.filter(member => member.user.bot).size}** Robots`)
    
    .setTimestamp()

    
    message.channel.send(embed);

   
}
module.exports.help = {
  name: "serveurinfo",
  aliases : ['server-info' , 'serveur-infos'],
  permissions : false,
  category: "membre",
  description: "Obtient toute les infos du serveur",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}