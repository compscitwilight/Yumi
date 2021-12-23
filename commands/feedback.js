const Discord = require("discord.js");

module.exports = {
    name: "feedback",
    description: "A feedback command to send feedback about the bot!",
    category: "Utility",
    execute(client, message, args) {
        if (args[0]) {
            const feedbackChannel = client.channels.cache.get("923401058577944688")

            feedbackChannel.send(`**Feedback from <@${message.member.id}>:**\n > ${message.content.split("y!feedback")[1]}`);
        }
    }
}
