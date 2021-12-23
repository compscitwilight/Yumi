const Discord = require("discord.js");

module.exports = {
    name: "feedback",
    description: "A feedback command to send feedback about the bot!",
    category: "Utility",
    execute(client, message, args) {
        if (args[0]) {
            const user = message.member
            const feedbackChannel = client.channels.cache.get("923401058577944688")
            const msg = message.content.split("y!feedback")[1];

            if (msg.length >= 10) {
                feedbackChannel.send(`**Feedback from <@${user.id}>:**\n > ${msg}`);

                message.channel.send(`<@${user.id}> Thanks for the feedback! Your feedback was successfully sent to our developers.`)
                message.delete()
            } else {
                message.delete()
                message.channel.send(`<@${user.id}> Your feedback message must be 10 or more characters.`);
            }
        } else {
            message.channel.send("Invalid arguments ``y!feedback {message}``");
        }
    }
}
