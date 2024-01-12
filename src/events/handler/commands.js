module.exports.run = async (client, interaction) => {
    if (interaction.data.type !== 1) return;

    const commands = client.commands.slash.get(interaction.data.name)
    if (!commands) return;

    commands.run(client, interaction, interaction.data.options)
}

module.exports.property = {
    name: "interactionCreate"
}