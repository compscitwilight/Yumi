const Discord = require("discord.js");
const replies = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

module.exports = {
    name: "8ball",
    description: "A simple and fun 8ball command that can give you responses to almost anything!",
    category: "Fun",
    execute(client, message, args) {
        if (args[0]) {
            const reply = replies[Math.floor(Math.random() * replies.length)];

            message.channel.send(`<@${message.member.id}>, ${reply}`)
        } else {
            message.channel.send("Missing arguments ``y!8ball { ... }``")
        }
    }
}
