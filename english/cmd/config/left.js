const { MessageEmbed, MessageCollector } = require('discord.js');
const WelcomeData = require('../../db/schema/left');
module.exports.run = async (client , message, args, datas)  => {
    let WelcomeDatas = await WelcomeData.findOne({ GuildID: message.guild.id });
  
    
    if (!WelcomeDatas) {
        const firstEmbed = new MessageEmbed()
            .setTitle('Setting up the goodbye message system')
            .setDescription('What will be the description of your message? Put {user} to mension the person')
            .setColor('BLUE');
        let firstMsg = await message.channel.send(firstEmbed);

        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });

        let descriptionsMessage;

        firstCollector.on('collect', async msg => {
            descriptionsMessage = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Goodbye system configuration')
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

                secondCollector.stop();

           
              

                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Goodbye system configuration')
                        .setDescription('The config is complete')
                        .setColor('BLUE');
                    await msg.channel.send(fourthEmbed);
        

                    await createTicketSystem(WelcomeDatas, descriptionsMessage, Channel, message)
                });
            });
    } else {
        
        let datas = await WelcomeData.findOne({GuildID: message.guild.id})
    // let msg = await channel.messages.fetch(datas.MessageID);
        //await msg.delete()
        await WelcomeData.findOneAndRemove({
            GuildID: message.guild.id
        });

        message.channel.send(`** The system has been removed from the server ** \nPlease repeat this command to activate it`);
    }

   
}
module.exports.help = {
  name: "left",

  permissions : ["MANAGE_CHANNELS"],
  category: "config",
  description: "Config the farewell system",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}
async function createTicketSystem(WelcomeDatas, descriptionsMessage, Channel, message) {
  
    const newData = new WelcomeData({
        GuildID: message.guild.id,
        Channel : Channel.id,
        Content: descriptionsMessage,
    });
    newData.save();
}