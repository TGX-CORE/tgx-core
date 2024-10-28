const { Client, PartialTypes, Parseables, Endpoint, Extensions } = require('tgx-core')
const { join } = require('path')

const client = new Client({
    partials: [PartialTypes.Chat, PartialTypes.Member],
    parseables: [Parseables.MessageEntities],

    endpoint: {
        type: Endpoint.Webhook,
        url: 'https://b9da-2001-4451-859-f800-d2a-be11-9e8e-bca7.ngrok-free.app',
        port: 8080
    },

    extensions: {
        load: [
            [Extensions.Registries, {
                root: join(__dirname, './'),
                commands: { load: true },
                events: { load: true },
                auxiliaries: { load: true }
            }]
        ]
    }

})

client.intialize()