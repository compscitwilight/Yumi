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

            if (user == client.user.id) {
                message.channel.send("You can't ship with me!");
                return;
            } else if (user == author) {
                message.channel.send("Woah there, you can't ship with yourself?");
                return;
            };

            let rnd = Math.floor(Math.random() * 100);
            const firstint = Number(String(rnd).charAt(0));

            if (rnd < 10) {
                const lttResponse = `
                <@${author}> x <@${user}>
    
                **${rnd}%**
                ${emojiVariations[0]}
                `

                message.channel.send(lttResponse)

                return;
            }

            const response = `
            <@${author}> x <@${user}>

            **${rnd}%**
            ${emojiVariations[firstint]}
            `

            message.channel.send(response)
        } else {
            if (args[0].includes("<@")) {
                message.channel.send("Please tag someone!");
            } else {
                message.channel.send("Invalid arguments ``y!ship {target}``");
            }
        }
    }
}
