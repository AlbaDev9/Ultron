const weather = require('weather-js');

const Discord = require('discord.js');
module.exports.run = async (client, message, args, datas) => {


    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results

        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please put a good localization')

        if(result === undefined || result.length === 0) return message.channel.send('** Non-Valid ** location');

        var current = result[0].current;
        var location = result[0].location;
        message.delete()
        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Time zone', `UTC${location.timezone}`, true)
        .addField('Degree type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
    module.exports.help = {
        name: "weather",
        aliases : ['météo'],
        category: "fun",
      emoji: "🔮",
        description: "Allows you to see the weather",
        usage : '<city>>',
        isUserAdmin: false,
       
        permissions : false,
        args: false
        }