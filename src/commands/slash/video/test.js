module.exports.run = async (client, interaction, options) => {
    interaction.createMessage({
        content: "test"
    })
    console.log("dewdwedwewedweweddewweddewedwedwdew");
};
module.exports.property = {
    name: 'test',
    category: 'video',
    description: 'Afficher la liste des commandes du bot.',
    type: 1,
    options: [
        {
            type: 3,
            name: "code",
            description: "Choisie l'action que tu souhaite faire.",
            required: true,
        }
    ]
}