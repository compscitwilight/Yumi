const Discord = require("discord.js");

module.exports = {
    name: "newrole",
    description: "Creates a new role in the server.",
    category: "Utility",
    execute(client, message, args) {
        if (args[0]) {
            if (message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)) {
                const roleName = args[0];
                const roleColour = args[1];

                console.log(`${roleName} ${roleColour}`)

                if (roleColour) {
                    message.guild.roles.create()
                        .then(role => {
                            role.name = roleName;
                            role.color = roleColour;
                        })
                        .catch(console.error())
                } else {
                    message.guild.roles.create()
                        .then(role => {
                            role.name = roleName;
                        })
                        .catch(console.error())
                }

                message.channel.send("Successfully created role ``" + roleName + "``.");
            } else {
                message.channel.send(`<@${message.member.id}> You are not allowed to run that command! Missing permission(s) MANAGE_ROLES`);
            }
        } else {
            message.channel.send("Invalid arguments ``y!newrole {roleName} {roleColour}");
        }
    }
}
