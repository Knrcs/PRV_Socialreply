exports.run = (message, args, command) => {
    const Discord = require('discord.js');

        console.log (`Args: ${args}\nCommand: ${command}`);
        return message.channel.send(`Type sb!IG help, if you need help`);
};

exports.help = {
    name: 'ig'
}