const SnakeGame = require('snakecord');
module.exports.run =  async (client, message, args, datas) => {
   message.delete()

    const snakeGame = new SnakeGame({

   title: 'Snake Game',

   color: "GREEN",

   timestamp: false,

   gameOverTitle: "Game Over"

});
return snakeGame.newGame(message)

};




module.exports.help = {
    name: "snake",
  
    category: "fun",
      emoji: "🔮",
    description: "Permet de jouer a un jeu",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }