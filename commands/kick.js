const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "A moderation command that kicks a member from your server.",
    category: "Moderation",
    execute(client, message, args) {
        const user = message.member

        if (args[0]) {
            const target = args[0].replace(/[\\<>@#&!]/g, "")

            if (user.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS)) {
                message.guild.members.kick(target);

                message.channel.send(`<@${user.id}> Successfully kicked <@${target}>`)
            } else {
                message.channel.send(`<@${user.id}> You are not allowed to run that command! Missing permission(s) KICK_MEMBERS`)
            }
        } else {
            message.channel.send("Invalid arguments ``y!kick {target}``")
        }
    }
}
