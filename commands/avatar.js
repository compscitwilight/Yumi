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

            const configuration = require("../config.json")
            const member = message.guild.members.fetch(id)

            member.then(function (result) {
                console.log(`${result.username}, ${result.avatar}, ${result.id}`)
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${result.username}'s Avatar`)
                    .setImage(`https://cdn.discordapp.com/avatars/${id}/${result.avatar}.png?size=1024`)

                message.channel.send({ embeds: [embed] });
            })
        } else {
            message.channel.send("Invalid arguments ``y!avatar {target}``")
        }
    }
}
