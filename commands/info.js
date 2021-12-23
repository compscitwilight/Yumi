const Discord = require("discord.js");
const Configuration = require("../config.json");
// https://cdn.discordapp.com/avatars/916319041067560980/65923d2594b85f68002c6785b5c399e5.png?size=1024"
module.exports = {
    name: "info",
    description: "Gives info about Yumi.",
    category: "Utility",
    execute(client, message, args) {
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Information")
            .setColor(Configuration.embedColor)
            .setThumbnail("https://cdn.discordapp.com/avatars/916319041067560980/65923d2594b85f68002c6785b5c399e5.png?size=1024")
            .setDescription("Yumi is a full-purpose Discord bot, with commands for moderation, utility, fun, etc!")
            .addFields(
                { name: "Developed by", value: `<@${Configuration.ownerId}>` },
                { name: "Github", value: `${Configuration.github}` }
            )
            .setFooter(`Developed with ❤️ by Blog`)

        message.channel.send({ embeds: [infoEmbed] })
    }
}
