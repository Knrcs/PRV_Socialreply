exports.run = (bot, message, args, command) => {
    const Discord = require('discord.js');

    let botEmbed = new Discord.MessageEmbed()
    .setDescription("Command Information")
    .setColor("#1CC7A2")
    .addField("sb!Commands", "Shows all Commands from the bot ")
    .addField("sb!IG_help", "Shows the help menu for the sb!IG Command")
    .addField("sb!ping", "Shows your current ping between Server and Client")
    .addField("sb!Social", "Shows the Social Media Platforms from the Developer")

    //.addField("!sbDev", "Send a Message to the Developer with '!sbDev (Message)' you would get an answer from the Dev after reviewing your message ")

    .setTimestamp()
    .setFooter('©Knrc 2020', "https://scontent-ham3-1.cdninstagram.com/v/t51.2885-19/s150x150/79216602_300874060929220_7583700574332256256_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_ohc=zYeGby5PA1wAX9uYufm&oh=546f142ae9d85f59f01840cf9ca40ef9&oe=5F156236");

    console.log (`Args: ${args}\nCommand: ${command}`);
    return message.author.send(botEmbed);


};

exports.help = {
    name: 'commands'
}