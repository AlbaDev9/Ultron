const datas = require('../../config.json');
module.exports = async (client) => {
    await console.log('Reset de la console en cours...')
   await  console.log('Je suis en ligne')
    /*client.user.setPresence({ activity: { name: `${datas.Statut}`, type: 'WATHCING'}, status: 'online'})
    await client.discordVoice.start();*/
    const status = datas.Statuts
  setInterval(function(){
    let stats = status[Math.floor(Math.random()*status.length)]
    client.user.setActivity(stats, {type: 'PLAYING'})
  }, 5000)
                        
      
      client.user.setStatus("online");

}