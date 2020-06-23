exports.run = (message, args, command) => {
    const Discord = require('discord.js');

    let botEmbed = new Discord.MessageEmbed()
    .setColor('#1CC7A2')
    .setAuthor('Knrc', 'https://scontent-ham3-1.cdninstagram.com/v/t51.2885-19/s150x150/79216602_300874060929220_7583700574332256256_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_ohc=zYeGby5PA1wAX9uYufm&oh=546f142ae9d85f59f01840cf9ca40ef9&oe=5F156236', 'https://instagram.com/knrcart')
    .setDescription("Here are all social media's from the ")
    .addFields(
        { name: '<:SBig:723251998295588965> art page', value: '@Knrcart' },
        { name: '<:SBig:723251998295588965> personal page', value: '@Knrc__' },
        { name: '<:SBdiscord:723250665639378966> Discord Server', value: 'soon.tm'},
        { name: '<:SBtwitch:723250700531793980> Twitch channel', value: 'Twitch.tv/knrc'},
    )
    .setTimestamp()
    .setFooter('©Knrc 2020', "https://scontent-ham3-1.cdninstagram.com/v/t51.2885-19/s150x150/79216602_300874060929220_7583700574332256256_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_ohc=zYeGby5PA1wAX9uYufm&oh=546f142ae9d85f59f01840cf9ca40ef9&oe=5F156236");

    console.log (`Args: ${args}\nCommand: ${command}`);
    return message.author.send(botEmbed);
}
exports.help = {
    name: 'social'
}