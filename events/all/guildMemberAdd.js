const {MessageEmbed, GuildMemberRoleManager, MessageAttachment} = require('discord.js');
const fs = require('fs')
const moment = require('moment')
const Levels = require('discord-xp')
const db = require('quick.db')
const welcome = new db.table('welcome')
const Welcomes = require('../../db/schema/Welcome')
const Fonction = require('../../db/schema/fonction')
const raid = require('../../db/schema/raid')
module.exports = async (client, member) => {
    
    const infos = await raid.findOne({id: member.guild.id})
    const datas = await Welcomes.findOne({GuildID: member.guild.id})
    if(!datas) return;
    if(infos.activate === "on"){
        member.kick().then((member) => {member.send('Le serveur est en mode raid... Merci de re rejoindre plus tard')})
    }
    let msg = datas.Content
    if(msg.includes('{user}')) msg = msg.replace('{user}', member)
    if(member.bot) return;


if(datas.Channel === undefined) return;
await client.channels.cache.get(datas.Channel).send(msg)
if(datas.RolesGive === undefined ||"no") return;
 await member.roles.add(datas.RolesGive)

if(datas.logs === undefined){
    return;
}else{
    const logs = new MessageEmbed()
    .setTitle('Un membre vient de rejoindre')
    .setDescription(`${member.name} vient de rejoindre `)
    client.channels.cache.get(datas.logChannel).send(logs)
}

/*let user = member;
const canvas = Canvas.createCanvas(700, 250);
const ctx = canvas.getContext(`2d`);
const background = await Canvas.loadImage(`./img.jpg`);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.font = `40px Calvert MT Std`;
ctx.fillStyle = `#ffffff`;

ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
ctx.drawImage(avatar, 25, 25, 200, 200);

const attachment = new MessageAttachment(canvas.toBuffer(), './img.jpg');
client.channels.cache.get('859004582785318922').send(attachment).then(message => {
    message.channel.send(member)
    message.member.roles.add(datas.auto_role)
})*/

/*member.guild.fetchInvites().then(guildInvites => {
    const invites = {};
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // A real basic message with the information we need. 
    client.channels.cache.get(datas.logChannel).send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });*/
 
//  await client.channels.cache.get('860804420283400192').setName(`『📊』membre total ${member.guild.memberCount.toLocaleString()}`)
}
 
 