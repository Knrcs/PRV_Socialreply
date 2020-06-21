exports.run = (bot, message, args, command) => {
    const Discord = require('discord.js');

    let botEmbed = new Discord.MessageEmbed()
    .setDescription("sb!IG_help")
    .setColor("#1CC7A2")
    .addField("sb!IG_set_channel <channel name>", "set the Channel for your Instagram Posts")
    .addField("sb!IG_set_user <IG name>", "set the Instagram account for repost on Discord")
    .setTimestamp()
    .setFooter('©Knrc 2020', "https://scontent-ham3-1.cdninstagram.com/v/t51.2885-19/s150x150/79216602_300874060929220_7583700574332256256_n.jpg?_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_ohc=zYeGby5PA1wAX9uYufm&oh=546f142ae9d85f59f01840cf9ca40ef9&oe=5F156236");
   
    
    console.log (`Args: ${args}\nCommand: ${command}`);
    return message.author.send(botEmbed);

}
exports.help = {
    name: 'ig_help'
}