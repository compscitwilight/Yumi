const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    description: "A command to get a user's avatar",
    category: "Utility",
    execute(client, message, args) {
        const user = message.member
        const target = args[0]

        if (target && target.includes("<@")) {
            const id = target.replace(/[\\<>@#&!]/g, "")

            if (message.guild.members.search(id)) {
                const configuration = require("../config.json")
                const member = client.users.fetch(id)

                member.then(function (result1) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle(`${result1.username}'s Avatar`)
                        .setThumbnail(`https://cdn.discordapp.com/avatars/${result1.id}/${result1.avatar}.png?size=1024`)

                    message.channel.send(embed);
                })
            }
        } else {
            message.channel.send("Invalid arguments ``y!avatar {target}``")
        }
    }
}