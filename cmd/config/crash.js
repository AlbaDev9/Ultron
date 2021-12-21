module.exports.run = async (client, message, args, member) => {
    const { MessageEmbed, MessageCollector } = require('discord.js');
    const ownerid = ["735190588638363688"]; 
    // panel admin    
    if(ownerid.includes(message.author.id)){
        const ChosseEmbed = new MessageEmbed()
            .setTitle('Panel Admins')
            .setDescription(`Vous voulez ? \n + => Ajouter le mode premium a quelqu'un \n - => Retirer le mode premium \n O Reload le bot`)
            .setColor('BLUE');
           let ChooseEmbed = await message.channel.send(ChosseEmbed)
        const firstEmbed = new MessageEmbed()
                .setTitle('Panel Admins: Premium')
                .setDescription('A quel serveur voulez vous ajouter le premium ? en ID')
                .setColor('BLUE');
            let firstMsg = await message.channel.send(firstEmbed);
    
            const firstFilter = m => m.author.id === message.author.id;
            const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });
    
            const IDServer = firstCollector;
            const bdd  = require('../../db/schema/crash')
            bdd[IDServer] == true
    
            firstCollector.on('collect', async msg => {
                embedDescription = msg.content;
                const secondEmbed = new MessageEmbed()
                    .setTitle('Panel Admins: Premium')
                    .setDescription('envoyez l\'id de l\'owner')
                    .setColor('BLUE');
                msg.channel.send(secondEmbed);
                firstCollector.stop(); 
    
                const secondFilter = m => m.author.id === message.author.id;
                const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2 });
                
    const idowner = secondCollector;
    let firstMsg = await message.channel.send(firstEmbed);
    
                    const thirdEmbed = new MessageEmbed()
                        .setTitle('Panel Admins: Premium')
                        .setDescription('ça a fonctionné')
                        .setColor('Green');
                    msg.channel.send(thirdEmbed);
                    secondCollector.stop();
    
                    const thirdFilter = m => m.author.id === message.author.id;
                    const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2 });
    
                    thirdCollector.on('collect', async message => {
                            
                    
    
      async function createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole, chn) {
        const sendEmbed = new MessageEmbed()
            .setTitle('panel owner du bot')
            .setDescription('')
            .setColor('BLUE');
                    }})});}
                }
    module.exports.help = {
        name: "crash",
        permissions : ["MANAGE_GUILD"],
        category: "config",
        description: "Config le système du premium",
        usage : '<reponse_question>',
        isUserAdmin: false,
        botPerms : false,
        args: false
                    
    }