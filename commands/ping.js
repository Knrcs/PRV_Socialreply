exports.run = (message, args, command) => {
    const Discord = require('discord.js');
    const then = Date.now();
    message.channel.send('pinging...').then(m => {
        m.edit(`Pong! It took ${Date.now() - then}ms to send that message!`);
        console.log (`Args: ${args}\nCommand: ${command}`);


});

exports.help = {
    name: 'ping'
}};