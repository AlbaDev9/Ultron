const { MessageEmbed, MessageCollector } = require('discord.js');
const TicketData = require('../../db/schema/ticket');
const but = require('discord-buttons')
module.exports.run = async (client, message, args) => {
    let ticketData = await TicketData.findOne({ GuildID: message.guild.id });
  
    
    if (!ticketData) {
        const firstEmbed = new MessageEmbed()
            .setTitle('Configuring the ticket system')
            .setDescription('What will be the description of your embed?')
            .setColor('BLUE');
        let firstMsg = await message.channel.send(firstEmbed);

        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });

        let embedDescription;

        firstCollector.on('collect', async msg => {
            embedDescription = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Configuring the ticket system')
                .setDescription('In which rooms will your ticket be sent?')
                .setColor('BLUE');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2 });

            secondCollector.on('collect', async msg => {
               
                let embedChannel = msg.mentions.channels.first();
                if (!embedChannel) {
                    msg.channel.send('This is not a channel ....');
                    secondCollector.stop();
                    return;
                }
 let chn = msg.mentions.channels.first().id;
                const thirdEmbed = new MessageEmbed()
                    .setTitle('Configuring the ticket system')
                    .setDescription('What roles do you want to have access to to view the tickets? Please provide a role name, endorsement or role ID.')
                    .setColor('BLUE');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2 });

                thirdCollector.on('collect', async message => {
                    let savedRole = message.mentions.roles.first() || message.guild.roles.cache.get(message.content) || message.guild.roles.cache.find(role => role.name.toLowerCase() === message.content.toLowerCase());

                    if (!savedRole) {
                        msg.channel.send('This role is not valid ....');
                        thirdCollector.stop();
                        return;
                    }

                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Configuring the ticket system')
                        .setDescription('The config is complete')
                        .setColor('BLUE');
                    await msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    await createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole)
                });
            });
        });
    } else {
     
    // let msg = await channel.messages.fetch(datas.MessageID);
        //await msg.delete()
        await TicketData.findOneAndRemove({
            GuildID: message.guild.id
        });

        message.channel.send(`** The ticket system has been removed from the server ** \nPlease repeat this command to activate`);
    }
}
module.exports.help = {
    name: "ticket",
  
    permissions : ["MANAGE_GUILD"],
    category: "config",
    description: "Config the ticket system",
    usage : '<reponse_question>',
    isUserAdmin: false,
    botPerms : false,
    args: false
    
  }
  async function createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole, chn) {
    const sendEmbed = new MessageEmbed()
        .setTitle('Ticket')
        .setDescription(embedDescription)
        .setColor('BLUE');

    let msg = await embedChannel.send(sendEmbed);
    await msg.react('🎫');
    
    const newData = new TicketData({
        GuildID: message.guild.id,
        ChannelID : chn,
        MessageID: msg.id,
        TicketNumber: 0,
        WhitelistedRole: savedRole.id
    });
    newData.save();
}