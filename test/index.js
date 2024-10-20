const { join } = require('path')
const { AllowedUpdates, Client, PartialTypes, Parseables, AllowedUpdatesOptions, Registries, Endpoint, ClientEvent } = require('tgx-core')

const client = new Client({
    sweep: join(__dirname, './'),
    registries: Registries.All,
    webhook: {
        url: 'https://bca5-175-176-51-55.ngrok-free.app',
        port: 8080
    },
    poll: {
        allowed_updates: new AllowedUpdatesOptions(AllowedUpdates.All),
    },
    partials: [PartialTypes.Chat, PartialTypes.Member],
    parseables: [Parseables.MessageEntities],
    endpoint: Endpoint.Webhook
})

client.intialize()