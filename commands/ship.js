const Discord = require("discord.js");
const emojiVariations = [
    "",
    "🟪",
    "🟪🟪",
    "🟪🟪🟪",
    "🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪🟪🟪🟪🟪",
    "🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪"
]

module.exports = {
    name: "ship",
    description: "A command to see your relationship with other users.",
    category: "Fun",
    execute(client, message, args) {
        if (args[0] && args[0].includes("<@")) {
            const user = args[0].replace(/[\\<>@#&!]/g, "");
            const author = message.member.id;

            let rnd = Math.floor(Math.random() * 100);
            const firstint = Number(String(rnd).charAt(0));
            console.log(firstint);

            const response = `
            <@${author}> x <@${user}>

            **${rnd}%**
            ${emojiVariations[firstint]}
            `

            message.channel.send(response)
        }
    }
}
