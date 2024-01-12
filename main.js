const { Client, Collection } = require("oceanic.js");
const { readdirSync } = require("fs");
const client = new Client({
    auth: `Bot ${require("./config").bot.token}`,
    gateway: {
        intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT", "GUILD_MEMBERS"],
        getAllUsers: true,
        presence: require("./config.js").bot.presence,
    },
});
client.functions = Object.assign({}, ...readdirSync("./src/functions")
    .filter(files => files.endsWith(".js"))
    .map(file => ({ [file.replaceAll(".js", "")]: require(`./src/functions/${file}`)})))
client.config = require("./config")
client.commands = {
    slash: new Collection(),
}
client.setMaxListeners(Infinity)

client.functions.loader.events(client, "ready")

client.functions.loader.commands.slash(client)

client.connect()

process.on('uncaughtException', function (error) {
    console.log(error.stack);
});
