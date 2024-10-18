const { Event, MessagePayloadMethod, PollOptions, PollOption, ClientEvent } = require('tgx-core')

class MessageReaction extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.MessageReaction
        })
    }

    async run(message, old, new_reaction) {

        message.replyText(`Reactions has been updated, old: ${ old.map((reaction) => reaction.emoji ).join(' ') }, new: ${ new_reaction.map((reaction) => reaction.emoji ).join(' ') }`)

    }

}

module.exports = MessageReaction