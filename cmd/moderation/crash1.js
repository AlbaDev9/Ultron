const {MessageEmbed , MessageCollector} = require('discord.js')
const Schema = require('../../db/schema/premium')
module.exports.run = async (client , message, args, datas, fonctions)  => {
  message.delete()
const Owner = "735190588638363688" /*const Owner = "504315887541551104"*/
if(message.author.id !== Owner) return
message.channel.send(new MessageEmbed().setTitle('Que voulez vous faire ?').setDescription("`➕` => Ajouter un serveur Premium et `➖` => supprime le premium")).then(async message => {
    message.react('➕')
    message.react('➖')
    const collector = message.createReactionCollector((reaction, user) => user.id === Owner);
    collector.on('collect' , async (reaction) => {
        //reaction._emoji.name =  emote unicode
        //reaction._emoji.id = emoji personnalisé (prendre son id : \emoji)
        if(reac === "➕"){
          message.channe('sera premium ?')
          const filter =   m => m.author.id === Owner;
          const collector = new MessageCollector(message.channel, filter , { max: 2 });
          collector.on('collect'  , async (message) => {
            const ID = message.content
            if(isNaN(ID))ge.reply('ce n\'est pas un ID... Merci de mettre que des chiffre')
            const verif =  client.guilds.cache.get(ID)
            console.log(verif)
            if(verif === false){
              //si le bot n'est pas sur le serveur
              
            }else{
              const data = Schema.findOne({
                GuildID : ID
              })
              async (err , data) => {
                if(data){
                  message.reply('ce serveur est déjà premium')
                }
              }
              new Schema({
                GuildID: ID
            }).save()
            message.channel.send(`Le serveur ${verif.name} est désormais premium !`).then(async (msg) => {
              msg.d({
                  timeout: 3000
              })
          })
            }
          })
    }
    if(reaction._emoji.name === "➖"){
      const embed1 = new MessageEmbed().setTitle('A quelle serveur voulez vous supprimé le  premium ? Merci de fournir son ID')
      message.channel.send(embed1)
      reaction.remove()
      const firstFilter = m => m.author.id === Owner;
      const firstCollector = new MessageCollector(message.channel, firstFilter,  {
          max: 2
      });
      firstCollector.on("collect", async (message) => {
          const users = message.guilds.cache.get(message.content)
          if(isNaN(users))  message.reply('ce n\'est pas un ID... Merci de mettre que des chiffre') 
          message.channel.send(new MessageEmbed().setTitle("Premium fonctions").setDescription('Voulez vous supprimé le mode premium à : ' + users.name + " ?")).then(async (message, reaction) => {
              message.react('✅')
              message.react('❌')


              const collect = message.createReactionCollector((reaction, user) => user.id === Owner);
              collect.on('collect', async (reaction) => {

                  if (reaction._emoji.name === "✅") {



                      users.send(`<@735190588638363688> à retirer un de vos serveur du mode premium`)
                      Schema.findOne({
                              GuildID : ID
                          },
                          async (err, data) => {
                              if (!data) return message.channel.send(`${users.name} n'a pas le mode premium`).then(async (msg) => {
                                  msg.delete({
                                      timeout: 3000
                                  })
                              })


                              data.delete()
                              message.channel.send('Suppression effectué').then(async (msg) => {
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
  name: "crash",
  aliases : [''],
  permissions : [""],
  category: "",
  description: "",
  usage : '',
  isUserAdmin: false,
  botPerms : false,
  args: false
  
}