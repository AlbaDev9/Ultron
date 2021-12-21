const fs = require('fs')
const db = require('quick.db')
const {
    Collection,
    MessageEmbed
} = require('discord.js')
const config = require('../../config.json')
const Distube = require('distube')
const usersSpamMap = new Map()

const Levels = require("../../db/schema/levels");
const Welcomes = require('../../db/schema/Welcome')
const Guild = require('../../db/schema/guild')
const Fonction = require('../../db/schema/fonction')
const raid = require('../../db/schema/raid')
const { black } = require('colors')
const shop = require('../../db/schema/shop')
const Premium = require('../../db/schema/premium')
//["commands", "cooldowns"].forEach(x => client[x] = new Collection());
module.exports = async (client, message) => {

    if(message.author.bot) return;
    let prefix;
    if (message.channel.type === "dm") return;
    if (!message.guild.id) return;
    const fonctions = await Fonction.findOne({
        id: message.guild.id
    })
    if (!fonctions) {
        const doc = new Fonction({
            id: message.guild.id
        })
        doc.save()
    }
    const datas = await Guild.findOne({
        id: message.guild.id
    })
    if (!datas) {
        prefix = "!"
        const doc = new Guild({
            id: message.guild.id
        })
        doc.save()
    }else{
        prefix = datas.prefix
    }
    const shops = await shop.findOne({
        id : message.guild.id
    })
    if(!shops){
       
            const doc = new shop({
                id: message.guild.id
            })
            doc.save()
        
    }
    const infoss = await raid.findOne({
        id: message.guild.id
    })

    if (!infoss) {
        const doc = new raid({
            id: message.guild.id
        })
        await doc.save()
    }
  
     
    const prefixembed = new MessageEmbed()
        .setTitle("Prefix de ce serveur")
        .setDescription(`Le prefix est ${prefix}`)
        .setFooter(`Pour le changer merci de faire ${prefix}setprefix`)
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.channel.send(prefixembed);
    }
    if (!message.channel.type === "dm") {
        xp.add(`messages_${message.guild.id}_${message.author.id}`, 1)
    }

    /*         Level Système                                             */
      
    if(fonctions.level !== null){
        if(fonctions.level === "on"){
            if(!message.author.bot){

               let levels = new db.table("levels")
        let lvl = new db.table("lvl")
        let oldlevel = db.fetch(`lvl_${message.guild.id}_${message.author.id}`, 1) || 0
       

        const exCD = Math.floor(Math.random()* 19) + 1;
        const expTOADD = Math.floor(Math.random()* 25) + 10;;
        if (exCD >= 8 && exCD <= 11) 
      
      await  levels.add(`levels_${message.guild.id}_${message.author.id}` , expTOADD)
       const exp = levels.fetch(`levels_${message.guild.id}_${message.author.id}`)
       if(exp < 1) db.set(`levels_${message.guild.id}_${message.author.id}`, 0)
        const userLevel = Math.floor(0.02 * Math.sqrt(exp));
        console.log(userLevel)
        if (exp > userLevel) {
            db.add(`lvl_${message.guild.id}_${message.author.id}`, 1)
            const newLevel = db.fetch(`lvl_${message.guild.id}_${message.author.id}`)
             await lvl.add(`lvl_${message.guild.id}_${message.author.id}` , newLevel)
           
        }
                }
            }
}
     
      // anti everyone
      if(fonctions.antievryone === "on"){
      if(bdd[message.guild.id]["antieveryone"] == true){
        if(message.mentions.everyone){
          if(userEveryoneMaps.has(message.author.id)){
            const reason = bdd[message.guild.id]["reason_everyone"]
            const nombreban = bdd[message.guild.id]["nombreeveryoneban"]
            const UserData = userEveryoneMaps.get(message.author.id);
            let {numberEveryonesent} = UserData;
            numberEveryonesent += 1;
            UserData.numberEveryonesent = numberEveryonesent
            userEveryoneMaps.set(message.author.id, UserData)
            if(numberEveryonesent >= 3) message.delete()
            if(numberEveryonesent === nombreban){
              message.guild.member(message.author.id).ban({reason: `${reason}`})
            }
          }else{
            userEveryoneMaps.set(message.author.id, {
              numberEveryonesent: 1
            })
            setTimeout(() => {
              userEveryoneMaps.delete(message.author.id)
            }, 40000);
          }
        }
      }
    }
    
      // anti spam
      if(fonctions.antispam === "on"){
      if(bdd[message.guild.id][anti-spam] = true){
        if(UserSpamMap.has(message.member.id)){
          const UserData = UserSpamMap.get(message.author.id);
          let {msgCount} = UserData
          const Reason = bdd[message.guild.id]["anti-spam-reason"]
          msgCount += 1
          UserData.msgCount = msgCount
          UserSpamMap.set(message.author.id, UserData)
          if(msgCount >= 6) message.delete()
          if(msgCount === 9) message.guild.member(message.author.id).ban({reason: Reason})
        }else{
          UserSpamMap.set(message.author.id, {
            msgCount: 1
          })
          setTimeout(() => {
            userEveryoneMaps.delete(message.author.id)
          }, 100000)
        }
    }
}

const Warning = require('../../db/schema/warns')
     if(fonctions.insulte === "on"){
        let blacklisted = ['con'  ,'fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette']
        let foundInText = false
        for (var i in blacklisted) {
            if (message.content.toLocaleLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
        }
        if (foundInText) {
            if(message.member.hasPermission('ADMINISTRATOR' || "BAN_MEMBERS")) return  message.delete()
            message.delete()
        

            Warning.findOne({ guildid: message.guild.id, user: message.author.id}, async(err, data) => {
                if(err) throw err;
                if(!data) {
                    data = new Warning({
                        guildid: message.guild.id,
                        user : message.author.id,
                        content : [
                            {
                                moderator : client.user.id,
                                reason : `Insulte`
                            }
                        ]
                    })
                } else {
                    const obj = {
                        moderator: client.user.id,
                        reason : `Insulte`
                    }
                    data.content.push(obj)
                }
                data.save()
            });
            message.channel.send(new MessageEmbed()
                .setDescription(`${message.author} vous avez été avertie par pour la raison : **Que vous avez envoyer une insulte**`)
                .setColor("RED")
            )
        }




       }
       if(fonctions.antilink === "on"){
           let stateInivte = false;
           const isInvite = (guild, code) => new Promise((resolve) => {
               guild.fetchInvites().then((invites) => {
                   invites.map(invite => {
                       if(invite.code === code) stateInivte = true;
                   })
                   resolve(stateInivte)
               })
           })
           
           const code = message.content.split('discord.gg/')[1]
           if(message.content.includes('discord.gg/')) {
                const IsOurInvite = await isInvite(message.guild , code)
               if(!IsOurInvite){
                if(message.member.hasPermission('ADMINISTRATOR' || "BAN_MEMBERS")) return  message.delete()
                message.delete()
            
                
             
    
                Warning.findOne({ guildid: message.guild.id, user: message.author.id}, async(err, data) => {
                    if(err) throw err;
                    if(!data) {
                        data = new Warning({
                            guildid: message.guild.id,
                            user : message.author.id,
                            content : [
                                {
                                    moderator : client.user.id,
                                    reason : `Pub discord`
                                }
                            ]
                        })
                    } else {
                        const obj = {
                            moderator: client.user.id,
                            reason : `Pub discord`
                        }
                        data.content.push(obj)
                    }
                    data.save()
                });
                message.channel.send(new MessageEmbed()
                    .setDescription(`${message.author} vous avez été avertie par pour la raison : **Que vous avez envoyer un lien vers un autre serveur**`)
                    .setColor("RED")
                )
               }
               const Otherinvite = [ 'gg/' || "discord.link" || "invite.gg"]
               let foundInText = false
        for (var i in Otherinvite) {
            if (message.content.toLocaleLowerCase().includes(Otherinvite[i].toLowerCase())) foundInText = true;
        }
        if (foundInText){
            if(message.member.hasPermission('ADMINISTRATOR' || "BAN_MEMBERS")) return  message.delete()
            message.delete()
        
            
         

            Warning.findOne({ guildid: message.guild.id, user: message.author.id}, async(err, data) => {
                if(err) throw err;
                if(!data) {
                    data = new Warning({
                        guildid: message.guild.id,
                        user : message.author.id,
                        content : [
                            {
                                moderator : client.user.id,
                                reason : `Pub discord`
                            }
                        ]
                    })
                } else {
                    const obj = {
                        moderator: client.user.id,
                        reason : `Pub discord`
                    }
                    data.content.push(obj)
                }
                data.save()
            });
            message.channel.send(new MessageEmbed()
                .setDescription(`${message.author} vous avez été avertie par pour la raison : **Que vous avez envoyer un lien vers un autre serveur**`)
                .setColor("RED")
            )
        }
           
           }

       }
    


    /*                                 Handler Commande  Message                                                                    */


    if (!message.content.startsWith(prefix)) return;

    const user = message.mentions.users.first();

    const args = message.content.slice(prefix.length).split(/ +/);


    console.log(args);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;


    if (command.help.args && !args.length) {
        const arg = new MessageEmbed()
            .setTitle('`❓`・Nous avons pas assez d\'information')
            .setColor('RED')
            .setDescription(`Il nous faut plus de précision !`)
        let NoArgsReply = arg
        const noPerm = new MessageEmbed()
            .setTitle('`🚫`・Vous avez pas les perms')
            .setColor('RED')
            .setDescription("Tu n'a pas les permissions !")
        if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS' || 'MANAGE_GUILD' || 'ADMINISTRATOR')) return message.channel.send(noPerm)
        const argS = new MessageEmbed()
            .setTitle('`❓`・Nous avons pas assez d\'information')
            .setColor('RED')
            .setDescription(`Il nous faut plus de précision !\nVoici comment utilisé la commande: \`${prefix}${command.help.name} ${command.help.usage}\``)
        if (command.help.usage) {
            var Usage = argS
        } else {
            var Usage = arg
        }
        if (command.help.usage) Usage;
        return message.channel.send(Usage);

    }
    if (command.help.aliases === "work") {

    }
    if (command === "daily") {

    } else {
        if (!client.cooldowns.has(command.help.name)) {
            client.cooldowns.set(command.help.name, new Collection);

        }
        const timeNow = Date.now()
        const tStamps = client.cooldowns.get(command.help.name);
        const cdAmount = (command.help.cooldown || config.cooldown) * 1000;

        if (tStamps.has(message.author.id)) {
            const cdExpiration = tStamps.get(message.author.id) + cdAmount;

            if (timeNow < cdExpiration) {
                timeLeft = (cdExpiration - timeNow) / 1000;
                const notime = new MessageEmbed()
                    .setTitle('`🕒`・ Un peu de patience')
                    .setColor('RED')
                    .setDescription(`Merci d'attendre \`${timeLeft.toFixed(0)}\`seconde(s) !`)
                return message.reply(notime)
            }
        }

        tStamps.set(message.author.id, timeNow);
        setTimeout(() => tStamps.delete(message.author.id), cdAmount);
    }


    const noUser = new MessageEmbed()
        .setTitle('`🚫`・ Pas d\'utilisateur')
        .setColor('RED')
        .setDescription("Tu n'a pas mensionnez d'utilisateur ! Merci de le faire")
    const UserAdmin = new MessageEmbed()
        .setTitle('`👮‍♂️`・Cette personne est du Staff')
        .setColor('RED')
        .setDescription("Tu ne peut pas utilisé cette comande contre cette personne !")
        const membersMentions = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (command.help.isUserAdmin && !user) return message.channel.send(noUser)
    if (command.help.isUserAdmin && message.guild.member(membersMentions).hasPermission(command.help.permissions || [])) return message.channel.send(UserAdmin)
   if(command.help.botPerms === true && command.help.permissions){
    if(!message.guild.me.hasPermission(command.help.permissions))
    message.channel.send(new MessageEmbed() .setTitle('Je n\'ai pas certaine permissions') .setDescription(`Pour faire la commande \`${command.help.name}\` il me faut le(s) perm(s) \`${command.help.permissions}\``))
   }

    if (!message.member.hasPermission(command.help.permissions || [])) {
        const NoPerms = new MessageEmbed()
        .setTitle('`🚫`・Vous avez pas les perms')
        .setColor('RED')
        .setDescription(`Cette commande requit les permissions : \`${command.help.permissions || []}\``)
        return message.channel.send(NoPerms)
    }
    if(command.help.premium === true && !(await Premium.findOne({GuildID : message.guild.id}))) return message.channel.send(new MessageEmbed().setTitle('Mode premium requit'))



    command.run(client, message, args, datas, fonctions)
}