const { MessageEmbed, MessageCollector } = require('discord.js');
const WelcomeData = require('../../db/schema/Welcome');

module.exports.run = async (client , message, args, datas)  => {

    let WelcomeDatas = await WelcomeData.findOne({ GuildID: message.guild.id });
  
    
    if (!WelcomeDatas) {
        const firstEmbed = new MessageEmbed()
            .setTitle('Configuring the welcome message system')
            .setDescription('What will be the description of your message? Put {user} to mension the person')
            .setColor('BLUE');
        let firstMsg = await message.channel.send(firstEmbed);

        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });

        let descriptionsMessage;

        firstCollector.on('collect', async msg => {
            descriptionsMessage = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Configuring the welcome message system')
                .setDescription('In which rooms will your message be sent?')
                .setColor('BLUE');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2 });

            secondCollector.on('collect', async msg => {
               
                let Channel = msg.mentions.channels.first();;
                if (!Channel) {
                    msg.channel.send('This is not a channel .... Command stopped');
                    secondCollector.stop();
                    return;
                }

                const thirdEmbed = new MessageEmbed()
                    .setTitle('Configuring the welcome message system')
                    .setDescription('What roles will be given to the new members? do `cancel, return` to ignore this function')
                    .setColor('BLUE');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2 });

                thirdCollector.on('collect', async message => {
                    let RoleGive;
                    if(message.content === "cancel" || "return"){ RoleGive = "no"}else{
                        RoleGive = message.mentions.roles.first() 
                    }

                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Configuring the welcome message system')
                        .setDescription('The config is complete')
                        .setColor('GREEN');
                    await msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    await createTicketSystem(WelcomeDatas, descriptionsMessage, Channel, message, RoleGive)
                });
            });
        });
    } else {
        
        let datas = await WelcomeData.findOne({GuildID: message.guild.id})
    // let msg = await channel.messages.fetch(datas.MessageID);
        //await msg.delete()
        await WelcomeData.findOneAndRemove({
            GuildID: message.guild.id
        });

        message.channel.send(`** The system has been removed from the server ** \ nPlease repeat this command to activate it`);
    }
   
}
module.exports.help = {
  name: "welcome",

  permissions : ["MANAGE_CHANNELS"],
  category: "config",
  description: "Config the welcome system",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}
async function createTicketSystem(WelcomeDatas, descriptionsMessage, Channel, message, RoleGive, chn) {
  
    const newData = new WelcomeData({
        GuildID: message.guild.id,
        Channel : Channel.id,
        Content: descriptionsMessage,
        RolesGive: RoleGive.id
    });
    newData.save();
}