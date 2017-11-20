const fs = require('fs');
const character_file = "./data/characters.json";

let data;

fs.readFile(character_file, function(err, res) {
    if (err) console.log("error");
    else {
      data = JSON.parse(fs.readFileSync(character_file, 'utf8'));
      console.log(data);
    }
});


exports.infoCharacter = function(message, arrayCmd)
{
    if (arrayCmd.length <= 1)
    {
        message.channel.send("Usage : " + arrayCmd[0] + " [name]");
        return;
    }

    const name = arrayCmd[1];

    if (data.characters[name])
    {
        message.channel.send(format(data.characters[name], name));
    } else
        message.channel.send("Unknown character " + name);
    console.log(data.characters);
}

exports.listCharacter = function(message, arrayCmd)
{
    let output = "Liste des personnages rencontrés :";
    for (var key in data.characters){
        output += "\n - "+ key;
    }
    message.channel.send(output);
}

function format(perso, name) {
    let output = "=> " + name;
    output += "\n" + perso.race + " " + perso.class + ", " + perso.sex + " ";
    if (perso.alive)
        output += "[Vivant]";
    else
        output += "[Mort]";
    
    output += "\n" + perso.description;
    return output;
}