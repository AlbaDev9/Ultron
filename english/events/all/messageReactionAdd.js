const {MessageEmbed, TeamMember, UserManager , MessageCollector} = require('discord.js')
const Guild = require('../../db/schema/guild')  
const cooldown = new Set();
const Fonction = require('../../db/schema/fonction')
module.exports = async (client, reaction , user) => {
  
    if(reaction.message.channel.id === "859005279538118657"){

            reaction.users.remove(user.id)
            reaction.message.guild.member(user).roles.add('859006447051735071')
            const verifyes  = new MessageEmbed()
.setTitle('Verification')
.setDescription(`${user}  to react to pass the verification`)
.setFooter(`Message ID ${reaction.message.id}`)


}
if(user.bot) return;

/* Starboard */
/*
if(reaction.message.partial) await reaction.message.fetch(true)
if(reaction.partial) await reaction.fetch();
if(reaction.message.author.bot || user.bot) return;
let starboardChannel = reaction.message.guild.channels.cache.get('859028966891454474')
let starboardfetch = await starboardChannel.fetch({limit: 100})
let exist = starboardfetch.messages.cache.find(m => m.embeds.length >= 1 && m.embeds[0].title === "⭐・ Starboard" && m.embeds[0].fields[0].value.match(reaction.message.id))
if(exist) return;
if(reaction.emoji.name === "⭐"){
    let count = reaction.users.cache.filter(x => reaction.message.author.id !== x.id && !x.bot).array().length
    if(count >= 1){
        const embed = new MessageEmbed()
        .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL({dynamic : true}))
        .setTitle('⭐・ Starboard')
        .setDescription(reaction.message.content.length <= 0 ? "" : reaction.message.content)
        .addField("Message :", `[Lien](https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id})`)
        if(reaction.mesage.attachments.array().length >= 1) embed.setImage(reaction.message.attachments.array()[0].proxyURL)
        starboardChannel.send(embed)
    }
}*/
 //ticket
 const TicketData = require('../../db/schema/ticket')
 if (reaction.message.partial) await reaction.message.fetch();
 if (reaction.partial) await reaction.fetch();

 if (!reaction.message.guild) return;

 const data = await TicketData.findOne({
     GuildID: reaction.message.guild.id
 });
 if (!data) return;
 if (reaction.message.partial) await reaction.message.fetch();

 if (reaction.emoji.name === '🎫' && reaction.message.id === data.MessageID) {
     if (cooldown.has(user.id)) {
         reaction.users.remove(user.id);
         return;
     }
     data.TicketNumber += 1;
     await data.save();
     const channel = await reaction.message.guild.channels.create(`ticket-${'0'.repeat(4 - data.TicketNumber.toString().length)}${data.TicketNumber}`, {
         type: 'text',
         permissionOverwrites: [{
             id: reaction.message.guild.id,
             deny: ['VIEW_CHANNEL'],
         },],
     });
     await channel.createOverwrite(user, {
         VIEW_CHANNEL: true,
         SEND_MESSAGES: true,
         SEND_TTS_MESSAGES: false
     });
     await channel.createOverwrite(data.WhitelistedRole, {
         VIEW_CHANNEL: true,
         SEND_MESSAGES: true,
         SEND_TTS_MESSAGES: false
     });
     reaction.users.remove(user.id);
     const successEmbed = new MessageEmbed()
         .setTitle(`Ticket #${'0'.repeat(4 - data.TicketNumber.toString().length)}${data.TicketNumber}`)
         .setDescription(`This ticket was created by ${user.toString()}. Please say \`stop \` to close the ticket and \`close \` to delete it`)
         .setColor('BLUE');
     let successMsg = await channel.send(`${user.toString()}`, successEmbed);
     await cooldown.add(user.id);
     await checkIfClose(client, reaction, user, successMsg, channel);
     setTimeout(function () {
         cooldown.delete(user.id);
     }, 300000);
 }
}

async function checkIfClose(client, reaction, user, successMsg, channel) {
    const filter2 = m => m.content.toLowerCase() === 'stop'
    const collector2 = new MessageCollector(channel, filter2);
   
    collector2.on('collect', async msg => {
        channel.send(`This ticket has been closed.`);
        await collector2.stop();
        setTimeout(function () {
            channel.updateOverwrite(user ,{
                VIEW_CHANNEL: true,
                SEND_MESSAGES: false,
                SEND_TTS_MESSAGES: false
            })
        }, 10000);
    });

    //
 const filter = m => m.content.toLowerCase() === 'close'
 const collector = new MessageCollector(channel, filter);

 collector.on('collect', async msg => {
     channel.send(`This ticket will be deleted in ** 3 ** seconds`);
     await collector.stop();
     setTimeout(function () {
         channel.delete();
     }, 3000);
 });


}