const { Client, PartialTypes, Parseables, Endpoint, Extensions } = require('tgx-core')
const { join } = require('path')

const client = new Client({
    partials: [PartialTypes.Chat, PartialTypes.Member],
    parseables: [Parseables.MessageEntities],

    endpoint: {
        type: Endpoint.Webhook,
        url: 'https://ce33-2001-4451-859-f800-b974-7f50-f1f0-2954.ngrok-free.app',
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