const { AllowedUpdates, Client, PartialTypes, Parseables, AllowedUpdatesOptions, Registries, Endpoint, ClientEvent } = require('tgx-core')

const TelegramClient = new Client({
    sweep: './test',
    registries: Registries.All,
    webhook: {
        url: 'https://a05d-175-176-49-5.ngrok-free.app',
        port: 8080
    },
    poll: {
        allowed_updates: new AllowedUpdatesOptions(
            AllowedUpdates.All
            // AllowedUpdates.Message,
            // AllowedUpdates.InlineQuery,
            // AllowedUpdates.CallbackQuery,
            // AllowedUpdates.EditedMessage,
            // AllowedUpdates.ChatJoinRequest,
            // AllowedUpdates.ChatMember,
            // AllowedUpdates.MessageReaction,
            // AllowedUpdates.MessageReactionCount
        )
    },
    partials: [PartialTypes.Chat, PartialTypes.Member],
    parseables: [Parseables.MessageEntities],
    endpoint: Endpoint.Webhook
})

TelegramClient.intialize('6346967812:AAFOXgFjZJOWjx-h8VT6zQ0aNOKnN7e5BGE', '1877036958:TEST:61bcc7f527397d002c5f1ea78bfa56403b7728f5')