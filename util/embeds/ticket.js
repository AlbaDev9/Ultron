const { MessageEmbed, MessageCollector } = require('discord.js');
const TicketData = require('../../db/schema/ticket');

module.exports.run = async (client, message, args) => {
    let ticketData = await TicketData.findOne({ GuildID: message.guild.id });
  
    
    if (!ticketData) {
        const firstEmbed = new MessageEmbed()
            .setTitle('Configuration du système de tickets')
            .setDescription('Quelle sera la descriptions de votre embed ?')
            .setColor('BLUE');
        let firstMsg = await message.channel.send(firstEmbed);

        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });

        let embedDescription;

        firstCollector.on('collect', async msg => {
            embedDescription = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Configuration du système de tickets')
                .setDescription('Dans quelle salons sera envoyer votre ticket ?')
                .setColor('BLUE');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2 });

            secondCollector.on('collect', async msg => {
                let chn = msg.mentions.channels.first().id;
                let embedChannel = msg.mentions.channels.first();
                if (!embedChannel) {
                    msg.channel.send('Ceci n\'est pas un salons....');
                    secondCollector.stop();
                    return;
                }

                const thirdEmbed = new MessageEmbed()
                    .setTitle('Configuration du système de tickets')
                    .setDescription('À quels rôles voulez-vous avoir accès pour voir les billets ? Veuillez fournir un nom de rôle, une mention ou un ID du rôle.')
                    .setColor('BLUE');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2 });

                thirdCollector.on('collect', async message => {
                    let savedRole = message.mentions.roles.first() || message.guild.roles.cache.get(message.content) || message.guild.roles.cache.find(role => role.name.toLowerCase() === message.content.toLowerCase());

                    if (!savedRole) {
                        msg.channel.send('Ce rôle n\'est pas valide....');
                        thirdCollector.stop();
                        return;
                    }

                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Configuration du système de tickets')
                        .setDescription('La config est terminée')
                        .setColor('BLUE');
                    await msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    await createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole)
                });
            });
        });
    } else {
        
        let datas = await TicketData.findOne({id: message.guild.id})
    // let msg = await channel.messages.fetch(datas.MessageID);
        //await msg.delete()
        await TicketData.findOneAndRemove({
            GuildID: message.guild.id
        });

        message.channel.send(`**Le système de ticket à été retiré du serveur**\nMerci de refaire cette commandes pour l'activé`);
    }
}

module.exports.help = {
    name: "ticket",
  
    category: "config",
      emoji: "⚙️",
    description: "Permet de config le system de ticket du bot",
    usage : '',
    isUserAdmin: false,
   
    permissions : true,
    args: false
    }
async function createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole, chn) {
    const sendEmbed = new MessageEmbed()
        .setTitle('Ticket')
        .setDescription(embedDescription)
        .setColor('BLUE');

    let msg = await embedChannel.send(sendEmbed);
    await msg.react('🎟');
    
    const newData = new TicketData({
        GuildID: message.guild.id,
        ChannelID : chn,
        MessageID: msg.id,
        TicketNumber: 0,
        WhitelistedRole: savedRole.id
    });
    newData.save();
}
