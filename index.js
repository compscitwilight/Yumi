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
    Client.user.setStatus(Configuration.customStatus);


});

Client.on('message', (msg) => {
    if (!msg.content.startsWith(Configuration.prefix) || msg.author.bot) return;

    const args = msg.content.slice(Configuration.prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // Ping command
    if (cmd == "ping") {
        Client.commands.get("ping").execute(Client, msg, args)
    }

    // Kick Command
    if (cmd == "kick") {
        Client.commands.get("kick").execute(Client, msg, args)
    }

    // Ban Command
    if (cmd == "ban") {
        Client.commands.get("ban").execute(Client, msg, args)
    }

    // Avatar Command
    if (cmd == "avatar") {
        Client.commands.get("avatar").execute(Client, msg, args)
    }

    // 8ball
    if (cmd == "8ball") {
        Client.commands.get("8ball").execute(Client, msg, args)
    }

    // Flip
    if (cmd == "flip") {
        Client.commands.get("flip").execute(Client, msg, args)
    }

    // Feedback
    if (cmd == "feedback") {
        Client.commands.get("feedback").execute(Client, msg, args);
    }

    // Ship
    if (cmd == "ship") {
        Client.commands.get("ship").execute(Client, msg, args);
    }
})

Client.login(Configuration.token);
