const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'MzgxODE4MTA0MTUxNTM5NzE3.DPTIqg.i73eBvYtnA7cI_NoOI0VQA_57qs';

const cmdRoll = require('./commands/roll.js');
const cmdInfoCharacter = require('./commands/info-characters.js');

exports.data = {}

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  let arrayCmd = message.content.split(" ");

  switch (arrayCmd[0]) {
    case "/roll":
      cmdRoll.rollDice(message, arrayCmd);
      break;
    case "/insulte_MJ":
      message.channel.send("Jimmy tu pues !");
      break;
    case "/info-perso":
      cmdInfoCharacter.infoCharacter(message, arrayCmd);
      break;
    case "/list-perso":
      cmdInfoCharacter.listCharacter(message, arrayCmd);
      break;
  };
});

client.login(token);