const botconfig = require('./config/botconfig.json');
const token = require('./config/token.json');
const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true});

bot.mongoose = require('./utils/mongoose');
const prefix = botconfig.prefix;
bot.commands = new Enmap();





//Bot Status
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("sb!Commands", { type: 'WATCHING' });
});



bot.on("message", message => {
    if(message.author.bot || !message.content.startsWith(botconfig.prefix)) return;

    const args = message.content.slice(botconfig.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);
    if (!cmd) return;

    cmd.run(bot, message, args, command, Discord);

});
// Alle Commands
fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let probs = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded command '${cmdName}'.`);
        bot.commands.set(cmdName, probs);
    });
});



bot.mongoose.init();
bot.login(token.token);