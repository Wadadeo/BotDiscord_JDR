const Discord = require('discord.js');

exports.rollDice = function(message, arrayCmd)
{
    //lance un dé avec valeur en paramètre (par defaut 100)
    let dice = 100;
    if (arrayCmd.length > 1)
    {
        var tmp = parseInt(arrayCmd[1]);
        if (tmp) dice = tmp; 
    }

    let randNb = Math.round(Math.random() * 100 * ( dice / 100));
    
    let output = message.author.username + " rolled 1d" + dice + " => " + randNb;
    let embed = new Discord.RichEmbed();
    let hasThreshold = false;

    if (arrayCmd.length > 2)
    {
        var threshold = parseInt(arrayCmd[2]);
        if (threshold) {
            dice = tmp;
            hasThreshold = true;
        }
    }

    if (hasThreshold)
    {
        output += " (seuil " + threshold + ")"; 
        if (randNb < threshold)
        {
            embed.setColor("#40E527");
            output += "\nREUSSITE";
        }
        else
        {
            embed.setColor("#EAAE3b");
            output += "\nECHEC";
        }
    }

    if (randNb >= Math.round(dice * 0.95))
    {
        output += "\n/!\\ ECHEC CRITQUE /!\\";
        embed.setColor("#CC1910");
    }
    else if (randNb <= Math.round(dice * 0.05))
    {
        output += "\n\\o/ REUSSITE CRITQUE \\o/";
        embed.setColor("#3BD4EA");
    }

    embed.setDescription(output);

    message.channel.send({embed});
    message.delete(function(err, res) {});
    
}