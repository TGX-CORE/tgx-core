const { Event, InlineKeyboard, InlineKeyboardButton, MessagePayloadMethod, InlineKeyboardGroup, ClientEvent } = require('tgx-core')

class Message extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Message
        })
    }

    async run(message) {
        // console.log(message.chat.invites)
        // console.log(await message.chat.invites?.create({ name: 'test' }))
    }

}

module.exports = Message