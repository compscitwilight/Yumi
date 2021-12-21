const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "A simple ping command",
    category: "Other",
    execute(client, message, args) {
        message.channel.send("pong!");
    }
}