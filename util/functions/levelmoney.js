const xp = require('../../db.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs")
  client.on('message' , (message) => {
    const dbUser = xp["users"][message.author.id]
        const exCD = Math.floor(Math.random()* 19) + 7;
        const expTOADD = Math.floor(Math.random()* 25) + 10;;
        if (exCD >= 8 && exCD <= 11) 
        dbUser.xp = dbUser.xp + expTOADD
        const userLevel = Math.floor(0.02 * Math.sqrt(dbUser.xp));
        if (dbUser.level < userLevel) {
            message.reply(`Super ! Tu vient de monter au level **${userLevel}** !`)
            dbUser.level = userLevel
        }
        
        fs.writeFile("./db.json", JSON.stringify(xp, null , 4), (err) => {
          if(err) console.log(err)
      });
  })
