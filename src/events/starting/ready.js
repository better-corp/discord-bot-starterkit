module.exports.run = async (client) => {
    console.log("Connecté sur", client.user.tag);
    client.functions.loader.events(client)
    // await client.application.bulkEditGlobal Commands(client.commands.slash.map(c => [{
    //     name: c.property.name,
    //     name_localizations: c.name_localizations ? c.name_localizations : null,
    //     description: c.property.type === 1 ? c.property.description : null,
    //     description_localizations: c.property.type === 1 ? c.property.description_localizations : null,
    //     type: c.property.type,
    //     options: c.property.options,
    //
    // }]).flat()).catch(err => err)
}
module.exports.property = {
    name: "ready"
}