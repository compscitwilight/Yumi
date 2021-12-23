const Discord = require("discord.js");

/*
        if (args[0] && args[1]) {
            const id = args[0].replace(/[\\<>@#&!]/g, "");
            const nick = args.slice(1).join(" ");

            if (nick.length <= 30) {
                if (id == message.member.id) {
                    if (message.member.permissions.has(Discord.Permissions.FLAGS.CHANGE_NICKNAME) || message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
                        message.member.setNickname(nick)
                    }
                } else {
                    if (message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
                        client.users.fetch(id).then(user => {
                            user.setNickname(nick);
                        }).catch(message.channel.send("Error: Couldn't find user."));
                    }
                }
            } else {
                message.channel.send("Nickname is too long!");
            }
        } else {
            message.channel.send("Invalid arguments ``y!nick {target} {nickname}");
        }
*/

module.exports = {
    name: "nick",
    description: "A command that lets you change the nickname of yourself, or others!",
    category: "Utility",
    execute(client, message, args) {
        if (message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
            if (args[0] && args[1]) {
                const id = args[0].replace(/[\\<>@#&!]/g, "");
                const nick = args.slice(1).join(" ");

                if (id == message.guild.ownerId) {
                    message.channel.send("Sorry, but I am not allowed to change your nickname.")
                    return;
                }

                if (nick.length <= 30) {
                    if (id == message.member.id) {
                        if (message.member.permissions.has(Discord.Permissions.FLAGS.CHANGE_NICKNAME) || message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
                            message.member.setNickname(nick)
                        }
                    } else {
                        if (message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
                            client.users.fetch(id).then(user => {
                                user.setNickname(nick);
                            }).catch(message.channel.send("Error: Couldn't find user."));
                        }
                    }
                } else {
                    message.channel.send("Nickname is too long!");
                }
            } else {
                message.channel.send("Invalid arguments ``y!nick {target} {nickname}");
            }
        } else {
            message.channel.send("I am not allowed to change nicknames!");
        }
    }
}
