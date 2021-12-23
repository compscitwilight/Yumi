const Discord = require("discord.js");
const FS = require("fs");

const Configuration = require("./config.json");
const Client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

Client.commands = new Discord.Collection();

const commandFiles = FS.readdirSync("./commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.on('ready', () => {
    console.log(`${Client.user.username} is now online!`);

    // Configuring the bot once it goes online
    Client.user.setStatus("idle")
    Client.user.setActivity(`${Client.guilds.cache.size} servers`, {
        type: "WATCHING"
    })
});

Client.on('message', (msg) => {
    if (!msg.content.startsWith(Configuration.prefix) || msg.author.bot) return;

    const args = msg.content.slice(Configuration.prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (!Client.commands.has(cmd)) return;

    Client.commands.get(cmd).execute(Client, msg, args)
})

Client.login(Configuration.token);
