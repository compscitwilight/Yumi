const Discord = require("discord.js");
const replies = ["Heads", "Tails"];

module.exports = {
    name: "flip",
    description: "A coinflip command that lets you virtually flip a coin.",
    category: "Fun",
    execute(client, message, args) {
        const reply = replies[Math.floor(Math.random() * replies.length)];

        message.channel.send(reply)
    }
}
