const datas = require('../../config.json');
module.exports = async (client) => {
    await console.log('Console reset in progress ...')
   await  console.log('I\'m online')
    /*client.user.setPresence({ activity: { name: `${datas.Statut}`, type: 'WATHCING'}, status: 'online'})
    await client.discordVoice.start();*/
    const status = datas.Statuts
  setInterval(function(){
    let stats = status[Math.floor(Math.random()*status.length)]
    client.user.setActivity(stats, {type: 'PLAYING'})
  }, 5000)
                        
      
      client.user.setStatus("online");

}