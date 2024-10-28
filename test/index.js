const { join } = require('path')
const { AllowedUpdates, Client, PartialTypes, Parseables, AllowedUpdatesOptions, Registries, Endpoint, ClientEvent } = require('tgx-core')

const client = new Client({
    sweep: join(__dirname, './'),
    registries: Registries.All,
    webhook: {
        url: 'https://07ff-2001-4451-831-2b00-d066-ee0-249b-4aaa.ngrok-free.app',
        port: 8080
    },
    partials: [PartialTypes.Chat, PartialTypes.Member],
    parseables: [Parseables.MessageEntities],
    endpoint: Endpoint.Webhook
})

client.intialize()