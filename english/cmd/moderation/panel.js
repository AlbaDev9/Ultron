const {MessageEmbed , MessageCollector} = require('discord.js')
const Schema = require('../../db/schema/premium')
module.exports.run = async (client , message, args, datas, fonctions)  => {
  message.delete()
const Owner = "735190588638363688"/*const Owner = "504315887541551104"*/
if(message.author.id !== Owner) return
message.channel.send(new MessageEmbed().setTitle('What do you want to do ?').setDescription("`➕` => Add a Premium server and` ➖` => remove the premium")).then(async message => {
    message.react('➕')
    message.react('➖')
    const collector = message.createReactionCollector((reaction, user) => user.id === Owner);
    collector.on('collect' , async (reaction) => {
        //reaction._emoji.name =  emote unicode
        //reaction._emoji.id = emoji personnalisé (prendre son id : \emoji)
        if(reaction._emoji.name === "➕"){
          message.channel.send('What will the server ID be on which the bot will be premium?')
          const filter =   m => m.author.id === Owner;
          const collector = new MessageCollector(message.channel, filter , { max: 2 });
          collector.on('collect'  , async (message) => {
            const ID = message.content
            if(isNaN(ID)) return message.reply('this is not an ID ... Please enter only numbers')
            const verif =  client.guilds.cache.get(ID)
            console.log(verif)
            if(verif === false){
              //si le bot n'est pas sur le serveur
              message.reply('The bot is not on the server')
            }else{
              const data = Schema.findOne({
                GuildID : ID
              })
              async (err , data) => {
                if(data){
                  message.reply('this server is already premium')
                }
              }
              new Schema({
                GuildID: ID
            }).save()
            message.channel.send(`The ${verif.name} server is now premium!`).then(async (msg) => {
              msg.delete({
                  timeout: 3000
              })
          })
            }
          })
    }
    if(reaction._emoji.name === "➖"){
      const embed1 = new MessageEmbed().setTitle('Which server do you want to remove the premium from? Please provide your ID')
      message.channel.send(embed1)
      reaction.remove()
      const firstFilter = m => m.author.id === Owner;
      const firstCollector = new MessageCollector(message.channel, firstFilter,  {
          max: 2
      });
      firstCollector.on("collect", async (message) => {
          const users = message.guilds.cache.get(message.content)
          if(isNaN(users))  message.reply('this is not an ID ... Please enter only numbers') 
       
          message.channel.send(new MessageEmbed().setTitle("Premium functions").setDescription('Do you want to remove the premium mode at: ' + /*users.name +*/ " ?")).then(async (message, reaction) => {
              message.react('✅')
              message.react('❌')


              const collect = message.createReactionCollector((reaction, user) => user.id === Owner);
              collect.on('collect', async (reaction) => {

                  if (reaction._emoji.name === "✅") {



                      users.send(`<@735190588638363688> to remove one of your servers from premium mode`)
                     const ID = message.guild.id 
                     Schema.findOne({
                              GuildID : ID
                          },
                          async (err, data) => {
                              if (!data) return message.channel.send(`${users.name} does not have premium mode`).then(async (msg) => {
                                  msg.delete({
                                      timeout: 3000
                                  })
                              })


                              data.delete()
                              message.channel.send('Deletion performed').then(async (msg) => {
                                  msg.delete({
                                      timeout: 3000
                                  })
                              })
                          }
                      )

                  }
                  if (reaction._emoji.name === "❌") {
                      return;
                  }

              })

          })
      })

    }
    })
})


   
}
module.exports.help = {
  name: "panel",
  aliases : [''],
  permissions : [""],
  category: "",
  description: "",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}