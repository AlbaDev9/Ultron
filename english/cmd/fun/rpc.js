

module.exports.run =  async (client, message, args, datas) => {
    let choices = ['rock', 'paper', 'scissors'];
    if (!args[0]) {
        return message.channel.send('Please put your choice among ' + choices)
    }
    
    
    if (choices.includes((args[0]).toLowerCase())) {
        let number = Math.floor(Math.random() * 3);
        if (number == 1) {
            return message.channel.send('It was a tie, we both had ' + (args[0]).toLowerCase())
        }
        if (number == 2) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send('I won I got ** paper **.')
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send('I won I got ** scissors **.')
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send('I won I took ** rock **.')
            }
        }
        if (number == 0) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send('You won, I took scissors.')
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send('You won, I took rock.')
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send('You won I took paper.')
            }
        }
    } else {
        return message.channel.send('Please take: rock, paper, or scissors.')
    }
    };




module.exports.help = {
    name: "rpc",
    aliases : ['pfc'],
    category: "fun",
      emoji: "🔮",
    description: "rock, paper,scissors",
    usage : '<choix>',
    isUserAdmin: false,
   
    permissions : false,
    args: true
    }