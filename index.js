//Require functions for the bot
const { Client, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv-flow').config();

const config = {
 token: process.env.TOKEN,
 owner: process.env.OWNER,
 prefix: process.env.PREFIX
};

const bot = new Client();

bot.commands = new Collection();
bot.mongoose = require('./utils/mongoose');
bot.config = require('./config.js');
require('./utils/functions')(bot);


//Bot Status
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Just vibin xd rawr~", { type: 'WATCHING' });
});



bot.on("message", message => {
    if(message.author.bot || !message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);
    if (!cmd) return;

    cmd.run(message, args, command);

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


//Login
bot.mongoose.init();
bot.login(config.token);